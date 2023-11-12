import * as React from 'react'
import style from './http.module.css'

export function HTTP({ text }: { text: string }) {
    return <><div className={style.codeHeader}>
        <span className={style.language}>HTTP</span>
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