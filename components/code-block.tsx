"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Play, Edit3, Maximize2, Download, Eye, EyeOff } from "lucide-react"

interface CodeBlockProps {
  title: string
  language: string
  code: string
  onCopy: (code: string) => void
  copied: boolean
  editable?: boolean
  previewable?: boolean
  downloadable?: boolean
}

export function CodeBlock({
  title,
  language,
  code,
  onCopy,
  copied,
  editable = false,
  previewable = false,
  downloadable = false,
}: CodeBlockProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedCode, setEditedCode] = useState(code)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showLineNumbers, setShowLineNumbers] = useState(true)

  const highlightSyntax = (code: string, lang: string) => {
    if (lang === "tsx" || lang === "jsx") {
      return code
        .replace(/(\bimport\b|\bexport\b|\bfrom\b|\bdefault\b)/g, '<span class="text-purple-400 font-medium">$1</span>')
        .replace(
          /(\bconst\b|\blet\b|\bvar\b|\bfunction\b|\breturn\b)/g,
          '<span class="text-blue-400 font-medium">$1</span>',
        )
        .replace(
          /(\bif\b|\belse\b|\bfor\b|\bwhile\b|\btry\b|\bcatch\b)/g,
          '<span class="text-pink-400 font-medium">$1</span>',
        )
        .replace(/(className|class)=/g, '<span class="text-green-400">$1</span>=')
        .replace(/(".*?")/g, '<span class="text-yellow-300">$1</span>')
        .replace(/('.*?')/g, '<span class="text-yellow-300">$1</span>')
        .replace(/(`.*?`)/g, '<span class="text-yellow-300">$1</span>')
        .replace(/(\{.*?\})/g, '<span class="text-orange-300">$1</span>')
        .replace(/(\/\/.*$)/gm, '<span class="text-gray-400 italic">$1</span>')
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-400 italic">$1</span>')
    } else if (lang === "css") {
      return code
        .replace(/(@keyframes|@media|@import)/g, '<span class="text-purple-400 font-medium">$1</span>')
        .replace(/([\w-]+)(?=\s*:)/g, '<span class="text-blue-400">$1</span>')
        .replace(/(:\s*)([\w-]+)/g, '$1<span class="text-green-400">$2</span>')
        .replace(/(\d+(?:px|em|rem|%|vh|vw|s|ms))/g, '<span class="text-yellow-300">$1</span>')
        .replace(/(#[0-9a-fA-F]{3,6})/g, '<span class="text-pink-400">$1</span>')
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-400 italic">$1</span>')
    } else if (lang === "html") {
      return code
        .replace(/(&lt;\/?[\w-]+)/g, '<span class="text-blue-400 font-medium">$1</span>')
        .replace(/([\w-]+)=/g, '<span class="text-green-400">$1</span>=')
        .replace(/(".*?")/g, '<span class="text-yellow-300">$1</span>')
        .replace(/(&gt;)/g, '<span class="text-blue-400 font-medium">$1</span>')
    }
    return code
  }

  const downloadCode = () => {
    const blob = new Blob([editedCode], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${title.toLowerCase().replace(/\s+/g, "-")}.${language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const codeLines = editedCode.split("\n")

  return (
    <Card className="glass border-0 overflow-hidden group hover-glow-premium">
      <CardHeader className="pb-3 bg-gradient-to-r from-muted/30 to-muted/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle className="text-lg font-serif">{title}</CardTitle>
            <Badge variant="outline" className="text-xs font-mono uppercase bg-background/50">
              {language}
            </Badge>
            {editable && (
              <Badge variant="secondary" className="text-xs">
                Interactive
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowLineNumbers(!showLineNumbers)}
              className="h-8 px-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {showLineNumbers ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
            </Button>
            {editable && (
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsEditing(!isEditing)}
                className={`h-8 px-2 ${isEditing ? "bg-primary/10 text-primary" : ""}`}
              >
                <Edit3 className="w-3 h-3" />
              </Button>
            )}
            {previewable && (
              <Button size="sm" variant="ghost" className="h-8 px-2">
                <Play className="w-3 h-3" />
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={() => setIsExpanded(!isExpanded)} className="h-8 px-2">
              <Maximize2 className="w-3 h-3" />
            </Button>
            {downloadable && (
              <Button size="sm" variant="ghost" onClick={downloadCode} className="h-8 px-2">
                <Download className="w-3 h-3" />
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onCopy(editedCode)}
              className={`h-8 px-3 ${copied ? "bg-green-50 text-green-600" : "hover:bg-primary/10"}`}
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 mr-1" />
                  <span className="text-xs font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 mr-1" />
                  <span className="text-xs">Copy</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className={`bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 overflow-x-auto ${isExpanded ? "max-h-none" : "max-h-96"} transition-all duration-300`}
        >
          {isEditing ? (
            <textarea
              value={editedCode}
              onChange={(e) => setEditedCode(e.target.value)}
              className="w-full h-full min-h-[200px] bg-transparent text-slate-100 font-mono text-sm p-4 border-0 outline-0 resize-none"
              spellCheck={false}
            />
          ) : (
            <div className="relative">
              <pre className="text-sm leading-relaxed">
                <code className="block">
                  {codeLines.map((line, index) => (
                    <div key={index} className="flex hover:bg-white/5 transition-colors">
                      {showLineNumbers && (
                        <span className="select-none text-slate-500 text-xs w-12 flex-shrink-0 text-right pr-4 py-1 border-r border-slate-700/50">
                          {index + 1}
                        </span>
                      )}
                      <span
                        className="flex-1 px-4 py-1"
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(line || " ", language),
                        }}
                      />
                    </div>
                  ))}
                </code>
              </pre>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-slate-800/50 to-transparent pointer-events-none"></div>
            </div>
          )}
        </div>
        <div className="bg-muted/30 px-4 py-2 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>{codeLines.length} lines</span>
            <span>{editedCode.length} characters</span>
            <span>{editedCode.split(/\s+/).length} words</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Ready to copy</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
