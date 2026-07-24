/* BETINDIA — Teen Patti landing page content */

export const BI_NAV_LINKS = [
  { label: "Live Table", href: "#live-table" },
  { label: "Features", href: "#features" },
  { label: "How To Play", href: "#journey" },
  { label: "Rankings", href: "#rankings" },
  { label: "Why BetIndia", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

export type BiStat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  live?: boolean;
  /** Static text shown instead of an animated number. */
  display?: string;
};

export const BI_HERO_STATS: BiStat[] = [
  { label: "Live Players", value: 48350, suffix: "+", live: true },
  { label: "Highest Win", value: 18.4, prefix: "₹", suffix: "L", decimals: 1 },
  { label: "Games Running", value: 214, live: true },
  { label: "Withdrawals", value: 0, display: "Instant" },
];

export const BI_FEATURES = [
  {
    icon: "Video",
    title: "Live Dealers",
    desc: "Professionally trained dealers hosting every table in real time — the authentic casino floor, streamed to you.",
  },
  {
    icon: "MonitorPlay",
    title: "HD Streaming",
    desc: "Crystal-clear 1080p tables with multi-angle cameras and near-zero latency, on any device.",
  },
  {
    icon: "IndianRupee",
    title: "Real Money",
    desc: "Real stakes, real wins. Boot amounts for every bankroll — from ₹10 casual tables to VIP high-roller rooms.",
  },
  {
    icon: "Zap",
    title: "Instant Withdrawals",
    desc: "UPI, Paytm and bank transfers processed in minutes, not days. Your winnings, when you want them.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure Platform",
    desc: "256-bit encryption, certified RNG and independently audited game fairness on every hand dealt.",
  },
  {
    icon: "Headset",
    title: "24×7 Support",
    desc: "A dedicated concierge team in Hindi and English, around the clock — chat, call or WhatsApp.",
  },
];

export const BI_JOURNEY = [
  {
    step: "01",
    title: "Join BetIndia",
    desc: "Create your account in under a minute and claim your welcome bonus.",
    icon: "UserPlus",
  },
  {
    step: "02",
    title: "Choose Table",
    desc: "Pick your boot amount — casual, classic or the VIP Royale room.",
    icon: "LayoutGrid",
  },
  {
    step: "03",
    title: "Place Bet",
    desc: "Post the boot to enter the pot. Every player antes before the deal.",
    icon: "Coins",
  },
  {
    step: "04",
    title: "Receive Cards",
    desc: "The dealer deals three cards face down to every player at the table.",
    icon: "Layers",
  },
  {
    step: "05",
    title: "Play Blind / Seen",
    desc: "Bet blind for half stakes, or look at your cards and play seen.",
    icon: "EyeOff",
  },
  {
    step: "06",
    title: "Raise · Call · Fold",
    desc: "Read the table. Raise the stakes, call the bet, or fold and live to fight again.",
    icon: "TrendingUp",
  },
  {
    step: "07",
    title: "Win The Pot",
    desc: "Strongest hand at showdown takes it all — paid to your wallet instantly.",
    icon: "Trophy",
  },
];

export type BiCard = { rank: string; suit: "♠" | "♥" | "♦" | "♣" };

export const BI_RANKINGS: {
  name: string;
  desc: string;
  odds: string;
  tier: number;
  cards: BiCard[];
}[] = [
  {
    name: "Trail",
    desc: "Three cards of the same rank. The undisputed king of Teen Patti — three Aces beats everything.",
    odds: "0.24%",
    tier: 1,
    cards: [
      { rank: "A", suit: "♠" },
      { rank: "A", suit: "♥" },
      { rank: "A", suit: "♦" },
    ],
  },
  {
    name: "Pure Sequence",
    desc: "Three consecutive cards of the same suit. A straight flush — rare, elegant, devastating.",
    odds: "0.22%",
    tier: 2,
    cards: [
      { rank: "A", suit: "♥" },
      { rank: "K", suit: "♥" },
      { rank: "Q", suit: "♥" },
    ],
  },
  {
    name: "Sequence",
    desc: "Three consecutive cards of mixed suits. A run that still commands the table.",
    odds: "3.26%",
    tier: 3,
    cards: [
      { rank: "K", suit: "♣" },
      { rank: "Q", suit: "♥" },
      { rank: "J", suit: "♠" },
    ],
  },
  {
    name: "Color",
    desc: "Three cards of the same suit, not in sequence. Quiet strength in a single shade.",
    odds: "4.96%",
    tier: 4,
    cards: [
      { rank: "A", suit: "♠" },
      { rank: "J", suit: "♠" },
      { rank: "8", suit: "♠" },
    ],
  },
  {
    name: "Pair",
    desc: "Two cards of the same rank. Played well, a pair wins more pots than you'd think.",
    odds: "16.9%",
    tier: 5,
    cards: [
      { rank: "Q", suit: "♦" },
      { rank: "Q", suit: "♣" },
      { rank: "7", suit: "♥" },
    ],
  },
  {
    name: "High Card",
    desc: "No combination — your highest card decides. This is where nerve beats numbers.",
    odds: "74.4%",
    tier: 6,
    cards: [
      { rank: "A", suit: "♦" },
      { rank: "9", suit: "♣" },
      { rank: "5", suit: "♠" },
    ],
  },
];

export const BI_STATS: BiStat[] = [
  { label: "Today's Players", value: 128460, suffix: "+" },
  { label: "Today's Winners", value: 31240, suffix: "+" },
  { label: "Biggest Pot", value: 18.4, prefix: "₹", suffix: " Lakh", decimals: 1 },
  { label: "Tables Online", value: 214, live: true },
];

export const BI_WHY = [
  {
    icon: "BadgeCheck",
    title: "Certified Fair Play",
    desc: "Every shuffle is driven by an independently certified RNG, audited monthly.",
  },
  {
    icon: "Wallet",
    title: "UPI-First Payments",
    desc: "Deposit with UPI, Paytm or net banking. Withdraw winnings in minutes.",
  },
  {
    icon: "Crown",
    title: "VIP Royale Club",
    desc: "Private tables, personal hosts and elevated limits for our most loyal players.",
  },
  {
    icon: "Lock",
    title: "Bank-Grade Security",
    desc: "256-bit SSL encryption and two-factor login protect every rupee and every hand.",
  },
  {
    icon: "Gauge",
    title: "Zero-Lag Tables",
    desc: "Purpose-built streaming infrastructure across India for flawless live play.",
  },
  {
    icon: "Gift",
    title: "Daily Rewards",
    desc: "Cashback, leaderboards and festival specials — being at the table always pays.",
  },
];

export const BI_STRATEGIES = [
  {
    icon: "EyeOff",
    title: "Master The Blind",
    desc: "Playing blind costs half the stake and doubles the pressure on seen players. Early blind play builds pots cheaply and hides your intent.",
  },
  {
    icon: "PiggyBank",
    title: "Protect Your Bankroll",
    desc: "Never sit with more than you can smile about losing. Fix a session budget, and step away when you've doubled — discipline is the real edge.",
  },
  {
    icon: "Users",
    title: "Read The Table",
    desc: "Betting speed tells stories. A sudden raise after slow calls usually means strength; hesitation before a chaal often means hope, not cards.",
  },
  {
    icon: "DoorOpen",
    title: "Fold Like A Professional",
    desc: "The best players fold most hands. Losing the boot is cheap; chasing a weak pair into a raised pot is how bankrolls die.",
  },
];

export const BI_FAQS = [
  {
    q: "Is Teen Patti on BetIndia played with real dealers?",
    a: "Yes. Every table is hosted by a professionally trained live dealer and streamed in HD from our studio floor. You see every shuffle, every deal and every card in real time — nothing is simulated.",
  },
  {
    q: "How fast are withdrawals?",
    a: "Most UPI and Paytm withdrawals are processed within minutes of your request. Bank transfers may take up to a few hours depending on your bank. There are no withdrawal fees on any tier.",
  },
  {
    q: "What is the minimum boot amount?",
    a: "Casual tables start from a ₹10 boot, classic tables from ₹100, and the VIP Royale room from ₹5,000. You can switch tables at any time between hands.",
  },
  {
    q: "What does playing 'blind' mean?",
    a: "A blind player bets without looking at their cards and pays only half the current stake. It's a signature Teen Patti move — cheaper to stay in the pot, and impossible for opponents to read.",
  },
  {
    q: "Is my money safe on BetIndia?",
    a: "All transactions run over 256-bit SSL encryption, player balances are held in segregated accounts, and game fairness is verified by an independently certified RNG that is audited monthly.",
  },
  {
    q: "Who can play on BetIndia?",
    a: "You must be 18 or older and located in a region where real-money card games are permitted. We enforce age verification at signup and offer deposit limits and self-exclusion tools to every player.",
  },
];
