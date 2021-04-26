/* Footer: bottom bar of portfolio page, with links to GitHub, LinkedIn, and social media. */
import React from "react";

function Footer() {
    return (
        <footer>
            {/* TODO: ADD ICONS IN PLACE OF NAMES */}
            <a href="https://github.com/akramsabbah9/" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/akram-sabbah-ba4130183/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a href="https://stackoverflow.com/users/14573709/akram" target="_blank" rel="noreferrer noopener">Stack Overflow</a>
        </footer>
    );
}

export default Footer;