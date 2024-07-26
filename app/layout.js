import "./globals.css";

export const metadata = {
    title: "Learnosity Next.js Demo",
    description: "A Basic Learnosity Example with Next.js"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                    {children}
                </div>
            </body>
        </html>
    );
}
