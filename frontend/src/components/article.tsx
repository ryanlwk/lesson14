import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Coffee,
  MessageSquare,
  Twitter,
  Youtube,
  Facebook,
  Twitch,
  Instagram,
  Radio,
  Music,
  Video,
  Grid3x3,
} from "lucide-react";

export function Article() {
  const [videoUrl, setVideoUrl] = useState("");
  const [language, setLanguage] = useState("en");

  const handlePreview = () => {
    console.log("Preview:", videoUrl);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header with Language Selector */}
      <header className="fixed top-4 left-4 z-50">
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[140px] bg-[#2a2a2a] border-[#3a3a3a]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">🇬🇧 English</SelectItem>
            <SelectItem value="es">🇪🇸 Español</SelectItem>
            <SelectItem value="fr">🇫🇷 Français</SelectItem>
            <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
            <SelectItem value="zh">🇨🇳 中文</SelectItem>
          </SelectContent>
        </Select>
      </header>

      {/* Floating Action Buttons */}
      <div className="fixed top-4 right-4 flex flex-col gap-3 z-50">
        <Button
          size="icon"
          className="bg-[#2a2a2a] hover:bg-[#3a3a3a] border border-[#3a3a3a]"
        >
          <Grid3x3 className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          className="bg-pink-500 hover:bg-pink-600 border-none"
        >
          <Coffee className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        {/* Logo Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full border-4 border-amber-600 mx-auto">
            <div className="text-6xl font-bold">O</div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">One For All Downloader</h1>
            
            {/* Social Buttons */}
            <div className="flex justify-center gap-3">
              <Button
                size="sm"
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                <Coffee className="h-4 w-4" />
                Buy Me a Coffee
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-orange-600 hover:bg-orange-700 border-orange-600 text-white"
              >
                <MessageSquare className="h-4 w-4" />
                Join us on Reddit
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-[#2a2a2a] hover:bg-[#3a3a3a] border-[#3a3a3a]"
              >
                <Twitter className="h-4 w-4" />
                Follow us on X
              </Button>
            </div>

            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              A coffee from you helps us keep the service alive and ad-free. If a coffee isn't possible, joining our community, sharing our work, leaving comments, and
              upvoting means the world to us!
            </p>
          </div>
        </div>

        {/* Crypto Donations Section */}
        <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
          <CardContent className="py-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-amber-500">
                💰 Crypto Donations
              </h3>
              <div className="space-y-1 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span className="font-semibold">Bitcoin (BTC):</span>
                  <code className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded">
                    bc1qgv02qk4...f8zfhtbdsn0y7mlqn8z7r2qzrh45wnze
                  </code>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Ethereum (ETH):</span>
                  <code className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded">
                    0xC9BA1693...4c32915fez9t3dcL3912jf2ab922fE292
                  </code>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Litecoin (LTC):</span>
                  <code className="text-[10px] bg-[#1a1a1a] px-2 py-1 rounded">
                    ltclqz01yrwmh5...9f2Juzx9rxTcqzsssw9Petxs
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video URL Input Section */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Video or playlist URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="flex-1 bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-gray-500 h-12"
            />
            <Button
              onClick={handlePreview}
              className="bg-amber-600 hover:bg-amber-700 px-8 h-12"
            >
              Preview
            </Button>
          </div>

          {/* Preview Area */}
          <div className="min-h-[300px] bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-sm">
              Enter a URL above to preview content
            </p>
          </div>

          <p className="text-xs text-center text-gray-400">
            Help us by upvoting and commenting in this{" "}
            <a href="#" className="text-orange-500 hover:underline">
              Reddit
            </a>{" "}
            post!
          </p>
        </div>

        {/* Supported Sites */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Supported Sites:</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="bg-red-600/20 border-red-600 text-red-400 px-4 py-2">
              <Youtube className="h-4 w-4 mr-2" />
              YouTube
            </Badge>
            <Badge variant="outline" className="bg-blue-600/20 border-blue-600 text-blue-400 px-4 py-2">
              <Facebook className="h-4 w-4 mr-2" />
              Facebook
            </Badge>
            <Badge variant="outline" className="bg-purple-600/20 border-purple-600 text-purple-400 px-4 py-2">
              <Twitch className="h-4 w-4 mr-2" />
              Twitch
            </Badge>
            <Badge variant="outline" className="bg-pink-600/20 border-pink-600 text-pink-400 px-4 py-2">
              <Instagram className="h-4 w-4 mr-2" />
              Instagram
            </Badge>
            <Badge variant="outline" className="bg-gray-600/20 border-gray-600 text-gray-400 px-4 py-2">
              <Radio className="h-4 w-4 mr-2" />
              TikTok
            </Badge>
            <Badge variant="outline" className="bg-green-600/20 border-green-600 text-green-400 px-4 py-2">
              <Music className="h-4 w-4 mr-2" />
              Spotify
            </Badge>
            <Badge variant="outline" className="bg-orange-600/20 border-orange-600 text-orange-400 px-4 py-2">
              <Video className="h-4 w-4 mr-2" />
              Vimeo
            </Badge>
          </div>
          <p className="text-center text-sm text-gray-400">and many more!</p>
        </div>

        <Separator className="bg-[#3a3a3a]" />

        {/* FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="item-1"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: How do I download a video?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Simply paste the video URL in the input field above and click Preview. You'll be able to select your preferred quality and format, then download the video directly to your device.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: Can I download playlists?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Yes! Our downloader supports playlist downloads from supported platforms. Simply paste the playlist URL and you'll be able to download individual videos or the entire playlist.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: Are there limits on video length or playlist size?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                There are no strict limits, but very long videos or large playlists may take longer to process. For the best experience, we recommend videos under 2 hours and playlists under 50 items.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: What sites are supported?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                We support all major video and audio platforms including YouTube, Facebook, Twitter, Vimeo, Dailymotion, Instagram, TikTok, and hundreds more sites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: Why did my download fail?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Download failures can occur due to network issues, invalid URLs, or content restrictions. Please check your internet connection, verify the URL is correct and publicly accessible, then try again.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: How long are download links valid?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Download links are typically valid for 24 hours. After that, you'll need to generate a new download link by entering the URL again.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline">
                Q: Why is my download stuck or not progressing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                If your download appears stuck, try refreshing the page and starting over. Large files may take some time to process. If the issue persists, the video may be too large or the source may have restrictions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Separator className="bg-[#3a3a3a]" />

        {/* Description Section */}
        <div className="space-y-6 text-gray-300">
          <h2 className="text-2xl font-bold text-white">
            Your Reliable Online Video & Audio Downloader
          </h2>
          
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              One For All (OFA) Downloader is designed to be the{" "}
              <strong className="text-white">best free video downloader online</strong>, offering a{" "}
              <strong className="text-white">simple, safe, ad-free video downloader</strong> experience. As a{" "}
              <strong className="text-white">web-based audio downloader and video tool</strong>, there's{" "}
              <strong className="text-white">no software</strong> or installation required; access it directly from your browser on Windows, Mac, or any other device. Easily{" "}
              <strong className="text-white">download YouTube videos online for free</strong>, grab{" "}
              <strong className="text-white">TikTok videos no watermark</strong>, save{" "}
              <strong className="text-white">Instagram reels online</strong>, or fetch content from Facebook, Twitter, Vimeo, Dailymotion, and hundreds of other sites.
            </p>

            <p>
              Need audio? Use our OFA to{" "}
              <strong className="text-white">convert YouTube to MP3 online for free</strong>, offering high-quality 128kbps, 192kbps, and 320kbps options. Looking for video quality? We support downloads up to 2K resolution, making us a great choice for an{" "}
              <strong className="text-white">HD audio extractor web app</strong> or a{" "}
              <strong className="text-white">2K video downloader online</strong>. Handle multiple files efficiently with our{" "}
              <strong className="text-white">batch video downloader online features</strong>, or use it as a dedicated{" "}
              <strong className="text-white">YouTube playlist downloader</strong> or even as{" "}
              <strong className="text-white">YouTube Shorts downloader</strong> or for downloading content or video/audio editing. Whether it's standard videos,{" "}
              <strong className="text-white">YouTube shorts download</strong>, or specific formats like converting{" "}
              <strong className="text-white">Facebook videos to MP3</strong>, OFA Downloader aims to be your reliable solution.
            </p>
          </div>

          <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-amber-500">New User?</h3>
            <p className="text-sm text-gray-400">
              Check out our guide on how to get started:{" "}
              <a href="#" className="text-amber-500 hover:underline font-medium">
                Learn How to Use OFA Downloader
              </a>
              .
            </p>
          </div>
        </div>

        <Separator className="bg-[#3a3a3a]" />

        {/* Footer */}
        <footer className="text-center space-y-4 py-8">
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Contact
            </a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Copyright Claims
            </a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms of Use
            </a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 One For All Downloader
          </p>
        </footer>
      </div>
    </div>
  );
}

