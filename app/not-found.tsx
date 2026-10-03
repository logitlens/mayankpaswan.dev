import Link from "next/link";
export default function NotFound(){return <main id="content" className="plain-page shell"><div className="kicker"><span>404</span> Unknown route</div><h1>Signal lost.</h1><p className="lead">The page you requested does not exist or has moved.</p><div className="hero-actions"><Link className="button primary" href="/">Return home</Link></div></main>}
