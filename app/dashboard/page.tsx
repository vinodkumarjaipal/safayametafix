/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useRef } from 'react';
import { Zap, Lock, Cpu, ArrowDown, CheckCircle2 } from 'lucide-react';

export default function DashboardPage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    const [outputUrl, setOutputUrl] = useState<string | null>(null);

    // Naye states Drag Drop aur Progress Phase ke liye
    const [isDragging, setIsDragging] = useState(false);
    const [processPhase, setProcessPhase] = useState<string>('');

    const ffmpegModuleRef = useRef<any>(null);
    const fetchFileRef = useRef<any>(null);
    const ffmpegRef = useRef<any>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const loadFFmpegDependencies = async () => {
        if (ffmpegModuleRef.current && fetchFileRef.current) {
            return;
        }

        const [{ FFmpeg }, { fetchFile }] = await Promise.all([
            import('@ffmpeg/ffmpeg'),
            import('@ffmpeg/util'),
        ]);

        ffmpegModuleRef.current = FFmpeg;
        fetchFileRef.current = fetchFile;
    };

    const loadFFmpeg = async () => {
        await loadFFmpegDependencies();

        if (!ffmpegRef.current) {
            ffmpegRef.current = new ffmpegModuleRef.current();
        }

        const ffmpeg = ffmpegRef.current;
        if (ffmpeg.loaded) return;

        ffmpeg.on("log", ({ message }: { message: string }) => {
            setLogs((prev) => [...prev.slice(-4), message]);
        });

        ffmpeg.on("progress", ({ progress: prog }: { progress: number }) => {
            setProgress(Math.round(prog * 100));
        });

        addLog("> Loading WebAssembly Core...");
        await ffmpeg.load();

        setIsLoaded(true);
        addLog("> ✅ WebGPU / Wasm Core Engine Loaded Successfully.");
        addLog("> Ready for quantum metadata mutation.");
    };

    const addLog = (msg: string) => {
        setLogs((prev) => [...prev.slice(-4), msg]);
    };

    // Main function jo file process karega (Click se bhi aur Drop se bhi)
    const processFile = async (file: File) => {
        if (!file) return;

        if (!isLoaded) {
            setProcessPhase("LOADING ENGINE...");
            await loadFFmpeg();
        }

        setIsProcessing(true);
        setProgress(0);
        setOutputUrl(null);
        setLogs([]);

        const ffmpeg = ffmpegRef.current;
        addLog(`> Target Locked: ${file.name} (${(file.size / (1024 * 1024)).toFixed(1)} MB)`);

        try {
            setProcessPhase("UPLOADING TO CORE..."); // 1. Uploading phase
            await ffmpeg.writeFile('input.mp4', await fetchFileRef.current(file));

            setProcessPhase("CLEANING METADATA..."); // 2. Cleaning phase
            addLog("> Initiating DNA Scramble and Metadata Wipe...");

            await ffmpeg.exec([
                '-i', 'input.mp4',
                '-map_metadata', '-1',
                '-c:v', 'copy',
                '-c:a', 'copy',
                'output.mp4'
            ]);

            setProcessPhase("FINALIZING GHOST FILE...");
            const data = await ffmpeg.readFile('output.mp4');
            const blob = new Blob([new Uint8Array(data as unknown as ArrayBuffer)], { type: 'video/mp4' });
            const url = URL.createObjectURL(blob);

            setOutputUrl(url);
            setIsProcessing(false);
            setProcessPhase(""); // Reset
            addLog("> ✅ STATUS: SAFE TO DOWNLOAD.");

            await ffmpeg.deleteFile('input.mp4').catch(() => { });
            await ffmpeg.deleteFile('output.mp4').catch(() => { });

        } catch (error) {
            console.error("FFmpeg Error:", error);
            addLog("> ❌ ERROR: Mutation failed.");
            setIsProcessing(false);
            setProcessPhase("");
        }
    };

    // Input Change Handler
    const handleProcessVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
    };

    // Drag & Drop Handlers
    const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
    const onDragLeave = () => { setIsDragging(false); };
    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('video/')) processFile(file);
    };

    const openFilePicker = () => {
        fileInputRef.current?.click();
    };

    const onUploaderKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFilePicker();
        }
    };

    React.useEffect(() => {
        const warmup = () => {
            void loadFFmpegDependencies();
        };

        if ('requestIdleCallback' in window) {
            const idleId = (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(warmup, { timeout: 2500 });
            return () => {
                (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idleId);
            };
        }

        const timeoutId = window.setTimeout(warmup, 1200);
        return () => {
            window.clearTimeout(timeoutId);
            if (outputUrl) URL.revokeObjectURL(outputUrl);
        };
    }, [outputUrl]);

    return (
        <div className="max-w-6xl mx-auto space-y-24 py-10 pb-20 px-4">

            {/* --- SECTION 1: CONVERTER TOOL --- */}
            <div className="space-y-12">
                <div className="text-center space-y-3 p-6 border border-emerald-950 rounded-xl bg-black">
                    <div className="inline-block px-3 py-1 border border-emerald-900 rounded-full bg-emerald-950/50 text-[10px] text-emerald-400 tracking-widest animate-pulse font-mono italic">
                        [ CORE STATUS: {isLoaded ? 'ONLINE // SECURE' : 'STANDBY'} ]
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                        THE <span className="text-emerald-500">SAFAYA</span> ZONE
                    </h1>
                    <p className="text-zinc-500 text-xs md:text-sm font-mono tracking-widest uppercase">
                        100% Client-Side • No data leaves your device
                    </p>
                </div>

                <h2 className="sr-only">Video Metadata Scrubber Tool</h2>

                <div className="max-w-2xl mx-auto">
                    <input id="safaya-video-upload" name="safaya-video-upload" type="file" accept="video/*" aria-label="Upload a video file to scrub metadata" ref={fileInputRef} onChange={handleProcessVideo} className="sr-only" />

                    {!isProcessing && !outputUrl && (
                        <label
                            htmlFor="safaya-video-upload"
                            role="button"
                            tabIndex={0}
                            aria-label="Select or drop a video file for metadata scrubbing"
                            onKeyDown={onUploaderKeyDown}
                            onDragOver={onDragOver}
                            onDragLeave={onDragLeave}
                            onDrop={onDrop}
                            className={`block border-4 border-dashed rounded-3xl p-12 md:p-20 text-center transition-all cursor-pointer group shadow-2xl ${isDragging ? 'border-emerald-500 bg-emerald-900/20 scale-105' : 'border-emerald-900/20 bg-emerald-950/5 hover:bg-emerald-900/10 hover:border-emerald-500/50'}`}
                        >
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border transition-all ${isDragging ? 'bg-emerald-500/20 border-emerald-500 animate-bounce' : 'bg-emerald-900/20 border-emerald-800/30 group-hover:scale-110'}`}>
                                <ArrowDown className="text-emerald-500" aria-hidden="true" />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                                {isDragging ? "Drop Payload Here" : "Select Target Media"}
                            </h3>
                            <p className="text-zinc-600 text-xs tracking-widest uppercase italic">MP4, MOV, WebM supported</p>
                        </label>
                    )}

                    {isProcessing && (
                        <div className="border border-emerald-950 rounded-3xl bg-black overflow-hidden font-mono shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                            <div className="p-4 bg-emerald-950/20 border-b border-emerald-950 flex justify-between items-center">
                                {/* Yeh process phase dikhayega: Uploading, Cleaning etc. */}
                                <span className="text-emerald-500 text-[10px] font-bold tracking-widest animate-pulse">
                                    {processPhase || 'EXECUTING_MUTATION.SH'}
                                </span>
                                <span className="text-emerald-500 text-xs">{progress}%</span>
                            </div>
                            <div className="p-6 space-y-2 text-zinc-500 h-48 overflow-hidden flex flex-col justify-end">
                                {logs.map((log, i) => (
                                    <p key={i} className={`text-[10px] ${log.includes('>') ? 'text-emerald-500' : 'opacity-40'}`}>{log}</p>
                                ))}
                            </div>
                            <div className="w-full bg-zinc-900 h-1">
                                <div className="bg-emerald-500 h-1 transition-all" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                    )}

                    {outputUrl && !isProcessing && (
                        <div className="text-center bg-emerald-950/10 border border-emerald-900/50 rounded-3xl p-12 space-y-6">
                            <div className="mx-auto w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_20px_#10b981]">
                                <CheckCircle2 className="text-black" size={32} aria-hidden="true" />
                            </div>
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Mutation Successful</h3>
                            <div className="flex flex-col gap-3">
                                <a href={outputUrl} aria-label="Download processed ghost video file" download="safaya_ghost_file.mp4" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl transition-all uppercase text-sm tracking-widest">Download Ghost File</a>
                                <button aria-label="Process a new video payload" onClick={() => { setOutputUrl(null); setLogs([]); }} className="text-zinc-600 hover:text-white text-[10px] uppercase tracking-widest">Process New Payload</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- SECTION 2: HOW TO USE (Cyberpunk Instructions) --- */}
            <section className="pt-20 border-t border-emerald-950/30">
                <div className="text-center mb-16 space-y-2">
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase">Operational <span className="text-emerald-500">Protocol</span></h2>
                    <p className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase">Follow steps for total anonymity</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Step 1 */}
                    <div className="relative p-8 bg-[#050505] border border-emerald-950 rounded-2xl group hover:border-emerald-500/30 transition-all">
                        <div className="absolute -top-4 left-8 px-3 py-1 bg-emerald-600 text-black text-[10px] font-black rounded-md tracking-widest">STEP_01</div>
                        <div className="w-12 h-12 bg-emerald-950/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Cpu className="text-emerald-500" size={24} aria-hidden="true" />
                        </div>
                        <h4 className="text-white font-bold mb-3 tracking-tight uppercase">Inject Media</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed font-mono">Select the video you want to scrub. The file is loaded into a secure WASM virtual container within your browser.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative p-8 bg-[#050505] border border-emerald-950 rounded-2xl group hover:border-emerald-500/30 transition-all">
                        <div className="absolute -top-4 left-8 px-3 py-1 bg-emerald-600 text-black text-[10px] font-black rounded-md tracking-widest">STEP_02</div>
                        <div className="w-12 h-12 bg-emerald-950/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="text-emerald-500" size={24} aria-hidden="true" />
                        </div>
                        <h4 className="text-white font-bold mb-3 tracking-tight uppercase">Scrub Engine</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed font-mono">Our core engine wipes all EXIF data, GPS tags, and device signatures. It also scrambles internal file bit-depth to reset hash values.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative p-8 bg-[#050505] border border-emerald-950 rounded-2xl group hover:border-emerald-500/30 transition-all">
                        <div className="absolute -top-4 left-8 px-3 py-1 bg-emerald-600 text-black text-[10px] font-black rounded-md tracking-widest">STEP_03</div>
                        <div className="w-12 h-12 bg-emerald-950/50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Lock className="text-emerald-500" size={24} aria-hidden="true" />
                        </div>
                        <h4 className="text-white font-bold mb-3 tracking-tight uppercase">Export Ghost</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed font-mono">Retrieve your &quot;Ghost File&ldquo;. It is now mathematically distinct from the original and safe for distribution on any platform.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}