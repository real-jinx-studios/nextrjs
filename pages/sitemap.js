import React, { Fragment } from "react";
import Link from "next/link";
import Lottie from "react-lottie-player";
import lottieJson from "../hooks/sa_anim.json";

export default function Sitemap() {
  return (
    <div className="sitemap_wrapper main_wrapper">
      <h1>EZTitles sitemap</h1>
      <lottie-player
        src="https://assets9.lottiefiles.com/datafiles/gUENLc1262ccKIO/data.json"
        background="transparent"
        speed="1"
        style={{ width: 300, height: 300 }}
        loop
        controls
        autoplay
      ></lottie-player>
      <section className="sitemap_section">
        <h2>EZTitles</h2>
        <ul>
          <li>
            <div className="sitemap_inner">
              <h3>Features</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="sitemap_inner">
              <h3>Online help</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="sitemap_section">
        <h2>EZConvert</h2>
        <ul>
          <li>
            <div className="sitemap_inner">
              <h3>Features</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="sitemap_inner">
              <h3>Online help</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="sitemap_section">
        <h2>3DTitles</h2>
        <ul>
          <li>
            <div className="sitemap_inner">
              <h3>Features</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="sitemap_inner">
              <h3>Online help</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="sitemap_section">
        <h2>Plugins</h2>
        <ul>
          <li>
            <div className="sitemap_inner">
              <h3>Features</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="sitemap_inner">
              <h3>Online help</h3>
              <ul>
                <li>
                  <Link href="/eztitles/features?features=production-scripts">
                    <a>Production Scripts</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=dragon-integration">
                    <a>Dragon Integration</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=file-comparison">
                    <a>File Comparison</a>
                  </Link>
                </li>
                <li>
                  <Link href="/eztitles/features?features=backup-recovery">
                    <a>Backup and recovery</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/eztitles/features?features=commands-insight">
                    <a>Commands Insight</a>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section>
      <section className="sitemap_section">
        <h2>Animation test</h2>
        <div className="sitemap_animation_wrapper">
          <div className="sitemap_animation_transparency_check">
            {" "}
            The song came from the bathroom belting over the sound of the
            shower's running water. It was the same way each day began since he
            could remember. It listened intently and concluded that the singing
            today was as terrible as it had ever been. She sat deep in thought.
            The next word that came out o her mouth would likely be the most
            important word of her life. It had to be exact with no possibility
            of being misinterpreted. She was ready. She looked deeply into his
            eyes and said, "Octopus." "Do Not Enter." The sign made it clear
            that they didn't want anyone around. That wasn't going to stop Jack.
            Jack always lived with the notion that signs were mere suggestions,
            not actually absolute rules. That's why the moment Jack looked at
            the "Do Not Enter" sign, he walked past it and onto their property.
          </div>
          <div className="sitemap_animation_animation">
            <lottie-player
              src="/animations/sa_anim.json"
              background="transparent"
              speed="1"
              style={{ width: 300, height: 300 }}
              loop
              controls
              autoplay
            />
            <lottie-player
              src="/animations/sa_anim.json"
              background="transparent"
              speed="1"
              style={{ width: 600, height: 600 }}
              loop
              controls
              autoplay
            />
            <lottie-player
              src="/animations/sa_anim.json"
              background="transparent"
              speed="1"
              style={{ width: 900, height: 900 }}
              loop
              controls
              autoplay
            />
            <lottie-player
              src="/animations/sa_anim.json"
              background="transparent"
              speed="1"
              style={{ width: 1200, height: 1200 }}
              loop
              controls
              autoplay
            />
          </div>
        </div>
      </section>
    </div>
  );
}
