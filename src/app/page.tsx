import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cloud, Lock, Upload, Share, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Droply</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-medium hover:underline underline-offset-4">
              Sign In
            </Link>
            <Link href="/sign-up" passHref>
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-sans font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Store, share, and access your files anywhere
                  </h1>
                  <p className="max-w-[600px] font-sans text-muted-foreground md:text-xl">
                    Droply gives you secure cloud storage with easy access to all your files from any device.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/sign-up" passHref>
                    <Button size="lg" className="gap-1">
                      Start for free <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features" passHref>
                    <Button size="lg" variant="outline">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Droply Dashboard Preview"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to manage your files
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Droply combines powerful storage capabilities with intuitive design for the best file management
                  experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Upload className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Easy Uploads</h3>
                <p className="text-center text-muted-foreground">
                  Drag and drop files or use our intuitive uploader to store your content securely.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Share className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Simple Sharing</h3>
                <p className="text-center text-muted-foreground">
                  Share files and folders with anyone using secure, customizable links.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Lock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Advanced Security</h3>
                <p className="text-center text-muted-foreground">
                  Your files are encrypted and protected with industry-leading security measures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that&apos;s right for you, from free to premium.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="mt-2 text-muted-foreground">Get started with basic storage</p>
                <div className="my-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <span>5GB storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-primary" />
                    <span>100MB file size limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Share className="h-4 w-4 text-primary" />
                    <span>Basic sharing</span>
                  </li>
                </ul>
                <Link href="/sign-up" passHref className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border border-primary p-6 shadow-sm">
                <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-primary-foreground">
                  Popular
                </div>
                <h3 className="text-xl font-bold mt-2">Pro</h3>
                <p className="mt-2 text-muted-foreground">Perfect for personal use</p>
                <div className="my-6">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <span>100GB storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-primary" />
                    <span>2GB file size limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Share className="h-4 w-4 text-primary" />
                    <span>Advanced sharing options</span>
                  </li>
                </ul>
                <Link href="/sign-up" passHref className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">Business</h3>
                <p className="mt-2 text-muted-foreground">For teams and businesses</p>
                <div className="my-6">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    <span>1TB storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-primary" />
                    <span>10GB file size limit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Share className="h-4 w-4 text-primary" />
                    <span>Team collaboration tools</span>
                  </li>
                </ul>
                <Link href="/sign-up" passHref className="mt-6">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about Droply.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">How secure is Droply?</h3>
                <p className="mt-2 text-muted-foreground">
                  Droply uses end-to-end encryption and follows industry best practices to ensure your files are always
                  secure.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">Can I access my files offline?</h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, you can mark files for offline access in our desktop and mobile apps.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">What file types are supported?</h3>
                <p className="mt-2 text-muted-foreground">
                  Droply supports all common file types including documents, images, videos, audio files, and more.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="text-lg font-bold">How do I share files with others?</h3>
                <p className="mt-2 text-muted-foreground">
                  Simply select the file or folder you want to share, click the share button, and choose your sharing
                  options.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to get started?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of users who trust Droply with their important files.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/sign-up" passHref>
                  <Button size="lg" className="gap-1">
                    Create your account <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container mx-auto flex flex-col gap-6 py-8 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Droply</span>
            </div>
            <p className="text-sm text-muted-foreground">Secure cloud storage for everyone.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 md:px-6 md:flex-row md:justify-between">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Droply. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
