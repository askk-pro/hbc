For a full-featured platform like **HBC (Hindu Business Community)** — including both user-facing and admin/business interfaces — here's an estimate of **how many frontend pages/screens you'll need**, grouped by module and use-case.

---

## 📄 **Estimated Number of Pages**

### 🧑‍💼 General User Pages (Public)

| Page                                    | Purpose                                     |
| --------------------------------------- | ------------------------------------------- |
| **1. Homepage**                         | Intro, call to action, feature highlights   |
| **2. Business Directory (Search/List)** | Category filter, paginated cards            |
| **3. Business Detail Page**             | Profile, media, greeting, events, lead form |
| **4. About / Why Join**                 | Value proposition for businesses            |
| **5. Contact / Support**                | Email/phone or form                         |
| **6. Terms & Privacy**                  | Legal info (static)                         |
| **7. Festival Campaign Landing**        | Featured businesses during festivals        |

🟨 **Subtotal: \~7 Pages**

---

### 🧾 Authentication & Onboarding

| Page                     | Purpose                 |
| ------------------------ | ----------------------- |
| **8. Login**             | Email/OTP or password   |
| **9. Signup**            | Select user or business |
| **10. OTP Verification** | Post-login OTP entry    |
| **11. Forgot Password**  | Email input, OTP step   |
| **12. Reset Password**   | Set new password        |

🟨 **Subtotal: \~5 Pages**

---

### 🏪 Business Dashboard (Post-login)

| Page                                        | Purpose                        |
| ------------------------------------------- | ------------------------------ |
| **13. Dashboard Home**                      | Summary of leads, plan, stats  |
| **14. Business Profile Editor**             | Name, desc, address, media     |
| **15. Media Uploads (Gallery/Audio/Video)** | Manage media content           |
| **16. Plan Management**                     | Choose/upgrade plan            |
| **17. Payments & Billing**                  | Invoices, Razorpay history     |
| **18. Lead Inbox**                          | View/respond to incoming leads |
| **19. Event & Offer Manager**               | Add/edit campaign promos       |
| **20. Greeting Message Uploader**           | Audio/video for listings       |

🟨 **Subtotal: \~8 Pages**

---

### 🛠️ Admin Panel

| Page                         | Purpose                              |
| ---------------------------- | ------------------------------------ |
| **21. Admin Dashboard**      | Stats, new businesses, plan usage    |
| **22. Business Approvals**   | Verify/reject business accounts      |
| **23. Lead Pricing Config**  | Per category/region rate management  |
| **24. Plan Feature Manager** | Set plan permissions                 |
| **25. Payment Logs**         | Track payments and top-ups           |
| **26. Audit Logs**           | See all sensitive actions (optional) |
| **27. Admin Roles/Users**    | Manage other moderators              |

🟨 **Subtotal: \~7 Pages**

---

### 📱 Optional / Nice to Have

| Page                            | Purpose                               |
| ------------------------------- | ------------------------------------- |
| **28. Notifications Center**    | Alerts, lead updates, system messages |
| **29. Multi-language toggle**   | User setting page (i18n)              |
| **30. Download App / PWA info** | For future mobile users               |

🟨 **Subtotal: \~3 Pages**

---

## 📊 **Grand Total Estimate: \~30 Pages**

| Group                 | Pages    |
| --------------------- | -------- |
| General Public        | \~7      |
| Auth & Login          | \~5      |
| Business Dashboard    | \~8      |
| Admin Panel           | \~7      |
| Optional Enhancements | \~3      |
| **Total**             | **\~30** |

---

## ✅ Next Suggestions

Would you like:

* A checklist in Excel/CSV of these pages?
* A sitemap/flow diagram (mermaid or draw\.io)?
* Next.js file structure proposal (e.g., `/app/(admin)/dashboard/page.tsx`)?

This structure ensures a scalable and professional layout for both MVP and long-term expansion.
