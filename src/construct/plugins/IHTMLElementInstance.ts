import { IDOMInstance } from "../objects/IDOMInstance";

type HtmlContentType = "html" | "bbcode" | 'text'

interface IHTMLElementInstance extends IDOMInstance {
/**
 * 
 * @param str 
 * @param type 
 * @param selector 
 * @param isAll 
 * Replaces some content inside the HTML element with the given string str. The string is interpreted according to type which must be one of "html", "bbcode" or "text". The location to replace content is specified by a CSS selector string. This can be left blank to replace the content of the entire main HTML element. The isAll flag will update all elements matching the selector if set, otherwise only the first matching element is updated.
 */
  setContent(str:string, type:HtmlContentType, selector:string, isAll:boolean):void
}

export { IHTMLElementInstance }