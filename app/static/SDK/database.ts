import { Userchap, UserchapUser, UserchapCount, UserchapInfo, Chaper, Shchap, Sh } from './databaseType'
import { base64DecToArr, UTF8ArrToStr } from './Base64'

class ProxyDB {
    RemoteProxy: string
    constructor(url: string = "https://koroneko.co/nhimmeo") {
        this.RemoteProxy = url
    }

    async fetch(url: string) {
        return fetch(url, {})
    }

    async userchap(page: number, perPage: number = 20): Promise<Userchap[]> {
        const r = await this.fetch(`${this.RemoteProxy}/userchap/${page}`)
        return await r.json() as Userchap[]
    }

    async UserchapUsers(): Promise<UserchapUser[]> {
        const r = await this.fetch(`${this.RemoteProxy}/UserchapUsers`)
        return await r.json() as UserchapUser[]
    }

    async UserchapCount(): Promise<UserchapCount[]> {
        const r = await this.fetch(`${this.RemoteProxy}/UserchapCount`)
        return await r.json() as UserchapCount[]
    }

    async UserchapInfo(bookid: number | string): Promise<UserchapInfo[]> {
        const r = await this.fetch(`${this.RemoteProxy}/UserchapInfo/${bookid}`)
        return await r.json() as UserchapInfo[]
    }

    async Bookchaps(bookid: number | string): Promise<Chaper[]> {
        const r = await this.fetch(`${this.RemoteProxy}/Bookchaps/${bookid}`)
        return await r.json() as Chaper[]
    }

    async isChapterPurchased(chapid: number | string): Promise<boolean> {
        const r = await this.fetch(`${this.RemoteProxy}/isChapterPurchased/${chapid}`)
        return await r.text() == "true"
    }

    async shchap(chapid: number | string): Promise<Shchap[]> {
        const r = await this.fetch(`${this.RemoteProxy}/sh_chap/${chapid}`)
        return await r.json() as Shchap[]
    }

    async Shchap(chapid: number | string): Promise<Sh | null> {
        const raw = await this.shchap(chapid)
        if (raw.length == 0) { return null }
        let url
        let txt_content
        if (raw[0].host === 'i') {
            url = `https://${raw[0].spath}.ipfs.nftstorage.link/`;
        } else {
            url = `https://api.telegra.ph/getPage/${raw[0].spath}?return_content=true`;
        }
        const req = await fetch(url)
        const t = await req.text()
        if (raw[0].host === 'i') {
            txt_content = atob(t);
        } else {
            const j = JSON.parse(t);
            txt_content = UTF8ArrToStr(base64DecToArr(j.result.content[0].children[0])).trim();
        }
        return {
            txt: txt_content,
            ...raw[0]
        }
    }
}

export { ProxyDB }