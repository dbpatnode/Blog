import Link from "next/link";

export default function Home() {
  return (
    <section class="hero">
      <div class="left">
        <h1>DANIEL PATNODES</h1>
        <em>LOVELY LITTLE</em>
        <h2>BLOG SITE</h2>
        <p>
          Check out my blogs, click around
          <br /> learn something.
        </p>
        <div className="pointer">
          <Link href="/Posts">
            <div class="check-btn">
              <div class="left-circle"></div>
              <div class="right-circle">
                <img src="https://cdn-icons-png.flaticon.com/512/1250/1250965.png" />
              </div>
              <p>Check Posts ></p>
            </div>
          </Link>
        </div>
      </div>
      <div class="right">
        <div class="img">
          <div class="border1"></div>
          <div class="border2"></div>
        </div>
      </div>
    </section>
  );
}
