import Image from "next/image"

import "./footer.sass"
import github_logo from "../../(assets)/(icons)/github-alt.svg"
export default function Footer() {
    return (
        <div className="sidebar_footer">
            <a href="https://github.com/jayam04/monymngr">
                <Image
                    src={github_logo}
                    width={20}
                    height={20}
                />
            </a>
        </div>
    )
}