Here’s a detailed **Infra Scaling Plan and Cost Breakdown** per month for HBC, including **each component**, **its purpose**, and **projected cost in INR** (approximate, based on current rates).

---

## 📅 Month-by-Month Infra Scaling Plan

### 🔹 **Month 1–2** (100–1000 users) — Launch Phase

| Component         | Tech/Service        | Purpose                              | Tier         | Cost (INR) |
| ----------------- | ------------------- | ------------------------------------ | ------------ | ---------- |
| **Frontend**      | Vercel              | Hosting static & SSR pages           | Hobby (Free) | ₹0         |
| **Backend**       | Supabase            | DB, Auth, Storage, Realtime          | Free         | ₹0         |
| **Media Storage** | Supabase Storage    | Business logos, banners, audio/video | Free         | ₹0         |
| **Email**         | Supabase Email Auth | OTP login emails                     | Free SMTP    | ₹0         |
| **Monitoring**    | Supabase Dashboard  | Logs, tables, RLS                    | Free         | ₹0         |
| **Payment**       | Razorpay/Stripe     | Payment gateway (transactional %)    | Per txn      | As needed  |

✅ **Total Infra Cost:** ₹0
🛠️ *Scale logic: none needed — all on free plans*

---

### 🔹 **Month 3–4** (1000–3000 users) — Campaign Kickoff

| Component      | Tier        | Monthly Cost (INR) |
| -------------- | ----------- | ------------------ |
| Vercel Hosting | Pro (5 USD) | ₹1700              |
| Supabase       | Pro (8 USD) | ₹1700              |

* Add **custom domains**, **SSR pre-rendering**, and **RLS-based multi-role features**.
* **Realtime** notifications start to be used (e.g., new lead alerts).

✅ **Total Infra Cost:** ₹3400/month
🛠️ *Scale logic: moderate traffic, enable CDN + SSR*

---

### 🔹 **Month 5–8** (3000–9000 users) — Steady Growth

| Component      | Tier Upgrade        | Monthly Cost (INR) |
| -------------- | ------------------- | ------------------ |
| Vercel Hosting | Pro + bandwidth     | ₹3400              |
| Supabase DB    | Pro + extra storage | ₹5100              |

* High upload of media (greetings, offers)
* Active **Supabase Edge Functions**: invoices, webhook logs, triggers
* More **authenticated users** active daily

✅ **Total Infra Cost:** ₹8500/month
🛠️ *Scale logic: enable autoscaling routes, optimize storage*

---

### 🔹 **Month 9–12** (10,000–15,000 users) — Mature System

| Component      | Tier Upgrade            | Monthly Cost (INR) |
| -------------- | ----------------------- | ------------------ |
| Vercel Hosting | Business or Custom Plan | ₹6800              |
| Supabase DB    | Pro + high concurrency  | ₹8500              |

* More data, more business leads
* **Realtime dashboard**
* Requiring **custom metrics**, **analytics** and potentially **cron jobs**

✅ **Total Infra Cost:** ₹15,300/month
🛠️ *Scale logic: partition tables if needed, cache public queries, implement cron jobs (via Supabase Edge or Cloud Scheduler)*

---

## 🔐 Optional Add-ons (When Needed)

| Add-on              | Provider         | Cost (INR)  | When to Add                       |
| ------------------- | ---------------- | ----------- | --------------------------------- |
| Email Notifications | Resend/Supabase  | ₹200–1000   | From month 4 (lead/user emails)   |
| Object CDN          | Cloudflare       | ₹0–1000     | For business media, from month 5+ |
| Monitoring          | LogRocket/Sentry | ₹0–1500     | From month 5+ for debugging       |
| Analytics Dashboard | Metabase         | Open-source | Setup in Month 6+                 |

---

Would you like this exported to:

* ✅ CSV
* ✅ Excel
* ✅ Word (tech cost summary doc)
* 📊 Also want a stacked bar chart for comparison?

Let me know and I’ll generate it.
