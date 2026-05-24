#!/bin/bash
# ─────────────────────────────────────────────
#  ZORX  —  One-click build + Netlify deploy
#  Usage:  bash deploy.sh
# ─────────────────────────────────────────────

set -e  # stop on any error

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Colour

echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║   ZORX — Deploy to zorxhealth.com.pk ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""

# ── 1. Check Node.js ──────────────────────────
if ! command -v node &> /dev/null; then
  echo -e "${RED}❌  Node.js not found. Install it from https://nodejs.org${NC}"
  exit 1
fi
echo -e "${GREEN}✓  Node.js $(node -v)${NC}"

# ── 2. Install Netlify CLI if missing ─────────
if ! command -v netlify &> /dev/null; then
  echo -e "${YELLOW}⬇  Installing Netlify CLI (one-time)...${NC}"
  npm install -g netlify-cli
  echo -e "${GREEN}✓  Netlify CLI installed${NC}"
else
  echo -e "${GREEN}✓  Netlify CLI $(netlify --version)${NC}"
fi

# ── 3. Login check — opens browser once ───────
echo ""
echo -e "${YELLOW}🔑  Checking Netlify login...${NC}"
netlify status 2>/dev/null || netlify login

# ── 4. Link site if not linked yet ───────────
if [ ! -f ".netlify/state.json" ]; then
  echo ""
  echo -e "${YELLOW}🔗  Linking to your Netlify site (first time only)...${NC}"
  echo -e "    Choose: ${GREEN}Use current git remote${NC} OR ${GREEN}Enter Site ID manually${NC}"
  echo ""
  netlify link
fi

# ── 5. Build ──────────────────────────────────
echo ""
echo -e "${YELLOW}🔨  Building site...${NC}"
npm run build
echo -e "${GREEN}✓  Build complete → out/ folder ready${NC}"

# ── 6. Deploy to production ───────────────────
echo ""
echo -e "${YELLOW}🚀  Deploying to zorxhealth.com.pk...${NC}"
netlify deploy --prod --dir=out

echo ""
echo -e "${GREEN}╔══════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  ✅  LIVE at zorxhealth.com.pk        ║${NC}"
echo -e "${GREEN}╚══════════════════════════════════════╝${NC}"
echo ""
