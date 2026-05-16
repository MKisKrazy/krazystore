import Link from "next/link";

export default function NotFound() {
    return (
        <div className="page-container">
            <h2 className="text-large thank-you">Thank You For Your Purchase 🎉</h2>
            <Link href={'/'}>
                <button>Continue &rarr;</button>
            </Link>
        </div>
    )
}