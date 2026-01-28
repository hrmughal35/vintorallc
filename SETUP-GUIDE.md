# Complete Setup Guide - Vercel Deployment 🚀

This guide covers everything you need to deploy your React website to Vercel and connect your GoDaddy domain.

---

## 📋 Table of Contents

1. [Deploying to Vercel](#deploying-to-vercel)
2. [Connecting GoDaddy Domain](#connecting-godaddy-domain)
3. [Troubleshooting](#troubleshooting)

---

## 🚀 Part 1: Deploying to Vercel

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Project

1. Click "Add New..." → "Import Git Repository"
2. Find your repository and click "Import"

### Step 3: Configure Project

**Settings:**
- Framework Preset: `Vite` (auto-detected)
- Root Directory: `.` (or leave blank)
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

4. Click "Deploy"
5. Wait 1-3 minutes for deployment

**Done!** Your website is now live at `yourproject.vercel.app`

---

## 🌐 Part 2: Connecting GoDaddy Domain

### Step 1: Add Domain in Vercel

1. Go to your project → Settings → Domains
2. Click "Add Existing"
3. Enter your domain (e.g., `yourdomain.com`)
4. Vercel will show DNS records you need to add

### Step 2: Update DNS in GoDaddy

1. Go to https://www.godaddy.com → Sign In
2. Click "My Products" → Find your domain → Click "DNS"

**Add/Edit DNS Records:**

**For root domain (yourdomain.com):**
- Type: `A`
- Name: `@`
- Value: (IP address from Vercel, e.g., `216.198.79.1`)
- Click Save

**For www subdomain (www.yourdomain.com):**
- Type: `CNAME`
- Name: `www`
- Value: (from Vercel, e.g., `710e4e8c343bd7cb.vercel-dns-017.com.`)
- Important: Include the dot (.) at the end
- Click Save

### Step 3: Wait for DNS Propagation

- Wait 5-60 minutes for DNS to propagate
- Vercel will show "Valid Configuration" when ready
- Your website will be live at your custom domain!

---

## 🆘 Troubleshooting

### Problem: Blank Page After Deployment

**Solution:**
1. Check browser console (F12) for errors
2. Verify Vercel settings:
   - Output Directory: `dist`
   - Build Command: `npm run build`
3. Check deployment logs in Vercel dashboard

### Problem: Admin Pages Show 404

**Solution:**
- Make sure `vercel.json` exists in your project root with:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Problem: Domain Not Connecting

**Solution:**
1. Double-check DNS values match exactly what Vercel shows
2. Wait longer (DNS can take up to 24 hours)
3. Verify DNS records are saved in GoDaddy
4. Click "Refresh" in Vercel to re-check

### Problem: Build Fails

**Solution:**
1. Test build locally: `npm run build`
2. Check for errors in build logs
3. Verify all dependencies are in `package.json`

---

## ✅ Quick Checklist

- [ ] Vercel account created
- [ ] Project deployed to Vercel
- [ ] Domain added in Vercel
- [ ] DNS records updated in GoDaddy
- [ ] Domain shows "Valid Configuration" in Vercel
- [ ] Website loads at custom domain
- [ ] HTTPS (lock icon) is working

---

## 📝 Important Notes

- **Automatic Deployments:** Vercel automatically deploys when you push to GitHub
- **Free SSL:** Vercel provides free HTTPS certificates
- **Build Time:** Usually 1-3 minutes per deployment
- **DNS Propagation:** Can take 5-60 minutes (sometimes up to 24 hours)

---

## 🎉 Success!

Once your domain shows "Valid Configuration" in Vercel, your website is live and ready!

**Your website will be accessible at:**
- `https://yourdomain.com`
- `https://www.yourdomain.com`

---

## 📞 Need Help?

- **Vercel Support:** Available in dashboard → Help
- **GoDaddy Support:** 1-480-505-8877
- **Documentation:** https://vercel.com/docs

---

**That's it! Your website is now live! 🚀**
