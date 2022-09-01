type AssetManagerFetchResult = string | JSON | Blob | ArrayBuffer
interface IAssetManager {
  /**
   * 
   * @param url - url to retrieve contents
   * Retrieve the contents of a given URL as a string, JSON object, Blob or ArrayBuffer. These methods work cross-platform, including in preview mode, where methods like fetch and XMLHttpRequest will fail, so these methods should always be preferred for fetching resources. Returns a promise that resolves when the resource has been loaded.
   */
  fetchText(url:string):Promise<AssetManagerFetchResult>
  fetchJson(url:string):Promise<AssetManagerFetchResult>
  fetchBlob(url:string):Promise<AssetManagerFetchResult>
  fetchArrayBuffer(url:string):Promise<AssetManagerFetchResult>

  /**
   * 
   * @param url 
   * Retrieve a URL that can be fetched directly for a given resource. Returns a promise that resolves to a string with a URL that may be the same as the original URL, or a different URL (e.g. blob: URL) if direct fetching is not supported. This is intended for using with local files where the other fetch methods are not appropriate, such as assigning the src attribute of a video.
   */
  getProjectFileUrl(url:string):Promise<string>

  /**
   * 
   * @param url 
   * As with getProjectFileUrl but for sound and music files, which are exported to a media subfolder.
   * getProjectFileUrl => Retrieve a URL that can be fetched directly for a given resource. Returns a promise that resolves to a string with a URL that may be the same as the original URL, or a different URL (e.g. blob: URL) if direct fetching is not supported. This is intended for using with local files where the other fetch methods are not appropriate, such as assigning the src attribute of a video.
   */
  getMediaFileUrl(url:string):string

  /**
   * A string of the subfolder media files are in, including sound and music files. In preview this is an empty string, and after export it is the media subfolder followed by a forward slash, e.g. "media/"
   */
  mediaFolder:string

  /**
   * A boolean indicating if the current browser/platform has built-in support for playing WebM Opus files (the default format encoded by Construct). If true then the <audio> tag and decodeAudioData can be assumed to support WebM Opus files. If false you can switch to using decodeWebMOpus() to use Construct's WebM Opus decoder instead. See the Audio scripting example for a demonstration.
   */
  isWebMOpusSupported:boolean

  /**
   * 
   * @param audioContext 
   * @param arrayBuffer 
   * This is designed as a drop-in replacement for Web Audio's decodeAudioData for platforms that do not have built-in support for WebM Opus. In this case Construct provides its own WebM Opus decoder as a fallback. It can only be used when isWebMOpusSupported is false; when it is true this method throws an exception since you should use the built-in methods instead. Pass an AudioContext and ArrayBuffer of the WebM Opus data to decode. This returns a promise that resolves to an AudioBuffer of the decoded audio that can be directly played. See the Audio scripting example for a demonstration.
   */
  decodeWebMOpus(audioContext:AudioContext, arrayBuffer:ArrayBuffer): Promise<AudioBuffer>

  /**
   * 
   * @param urls 
   * Fetch and run the JavaScript files at the given URLs. This can load scripts in the Files folder of the Project Bar, which unlike scripts in the Scripts folder are not automatically loaded by Construct.
   * In worker mode, this internally calls importScripts, which is synchronous. To avoid this becoming inefficient, try to load all the scripts you need with one call, e.g. loadScripts("script1.js", "script2.js", "script3.js").
   * 
   * When loading multiple scripts, they will run in the order they are provided, e.g. loadScripts("script1.js", "script2.js") will always run script1.js first and script2.js second.
   */
  loadScripts(...urls:string[]):Promise<void>

  /**
   * 
   * @param url 
   * Fetch and compile a WebAssembly.Module from the given URL, which is typically a .wasm file. This uses streaming compilation where supported. Note this does not instantiate the module, which needs to be done before any calls can be made. Pass the module resulting from this call to WebAssembly.instantiate() to get a WebAssembly.Instance from the module.
   */
  compileWebAssembly(url:string):Promise<WebAssembly.Instance>

}

export { IAssetManager }