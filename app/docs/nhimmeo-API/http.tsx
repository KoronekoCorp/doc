import * as React from 'react'
import style from './http.module.css'

export function HTTP({ text }: { text: string }) {
    return <>
        <div className={style.codeHeader}>
            <span className={style.language}>HTTP</span>
            {/* <button
                className={style.action}
                aria-haspopup="true"
            >
                
                <span className={style.run}>试用</span>
            </button> */}
        </div>
        <pre className={style.hasinner}>
            <code className={style.langhttp}>
                <span>
                    {text}
                </span>
            </code>
        </pre>
    </>
}