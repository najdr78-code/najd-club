import { useState, useEffect, useRef } from "react";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

/* ═══ SETTINGS ════════════════════════════════════════ */
// قم بحفظ صورة الشعار في مجلد المشروع باسم logo.png
const LOGO_URL = "/logo.png"; 
const API_URL = "https://najd-club-production.up.railway.app"; // الرابط الفعلي للسيرفر على Railway

/* ═══ LOGO ═══════════════════════════════════════════ */
const NajdLogo = ({ size = 48 }) => {
  if (LOGO_URL) {
    return <img src={LOGO_URL} alt="نادي نجد" style={{ width: size, height: size, objectFit: "contain", borderRadius: size / 4 }} />;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 1420 1420" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path fill="#7C49A8" transform="scale(3.55 3.55)" d="M263.019 166.665C266.825 166.87 291.033 165.877 292.489 167.377C293.274 169.499 292.991 174.351 293.03 176.816C293.232 189.763 292.765 199.668 289.855 212.307C285.135 228.411 277.831 240.418 265.66 252.022C252.133 264.69 234.945 272.753 216.557 275.058C187.435 278.54 160.958 269.119 140.752 247.878C129.07 235.575 121.455 219.976 118.941 203.198C117.551 193.84 117.574 176.861 117.822 167.187C124.735 166.329 137.964 166.66 145.294 166.628L147.39 166.603C147.839 192.696 143.817 215.321 163.996 235.924C174.628 246.826 189.201 252.987 204.429 253.017C219.871 253.249 234.759 247.265 245.746 236.411C260.929 221.434 262.798 206.501 262.916 186.409L263.019 166.665Z"/>
      <path fill="#FCFAF2" transform="scale(3.55 3.55)" d="M222.808 157.965C222.799 156.832 222.621 157.07 223.195 156.412C224.701 155.869 226.517 156.253 228.191 156.276C228.45 158.315 228.782 172.032 228.478 174.162C228.765 177.046 229.288 178.849 232.382 179.684C232.856 176.13 232.997 168.227 233.241 156.553C234.939 156.26 236.747 156.409 238.478 156.477C238.695 172.958 238.704 189.441 238.505 205.923C238.538 208.396 237.267 211.188 235.175 216.872C232.277 221.968 223.866 231.602 210.851 235.152C198.488 233.115 179.136 227.452 171.3 199.56C170.728 192.036 171.533 178.229 172.128 157.274C173.459 156.224 175.733 156.567 177.481 156.63C177.701 159.023 177.81 162.235 177.702 164.623L177.742 171.19L181.921 170.626C181.549 168.572 182.336 156.38 184.198 156.294C185.578 156.261 187.436 156.341 187.669 170.849C189.391 171.295 190.474 169.979 191.554 165.527C191.264 161.064 192.183 156.499 194.223 156.295C195.529 156.327 197.555 156.374 197.802 171.059C199.686 171.64 202.422 171.788 202.487 156.355C204.324 156.284 207.958 156.286 208.144 172.519C211.837 172.726 212.432 172.782 212.514 165.675C212.376 162.754 212.567 156.293 214.529 156.273C216.218 156.276 218.189 156.378 218.453 171.573C218.83 173.317 221.146 174.413 222.237 173.728C222.773 172.155 222.585 160.934 222.808 157.965Z"/>
      <path fill="#D8A435" transform="scale(3.55 3.55)" d="M171.533 178.229C171.267 175.968 171.657 158.993 172.128 157.274C173.459 156.224 175.733 156.567 177.481 156.63C177.701 159.023 177.81 162.235 177.702 164.623C177.372 169.704 177.616 178.749 177.032 182.892C175.259 182.863 174.019 182.787 172.257 182.593C171.96 181.064 171.726 179.772 171.533 178.229Z"/>
      <path fill="#D8A435" transform="scale(3.55 3.55)" d="M212.184 229.616C212.895 229.089 215.398 226.759 216.008 226.493C220.415 224.575 225.588 222.903 230.244 221.642C231.453 221.315 232.277 221.968 223.866 231.602Q210.851 235.152 198.488 233.115C199.482 230.986 199.938 230.513 201.78 229.616Z"/>
    </svg>
  );
};

/* ═══ ANIMATED ICONS ══════════════════════════════════ */
const AnimIcon = ({ type, size = 20, color = "#C4B5FD" }) => {
  const icons = {
    dashboard: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes db1{0%,100%{opacity:1}50%{opacity:.35}}
          @keyframes db2{0%,100%{opacity:.5}50%{opacity:1}}
          .db-r1{animation:db1 2s ease-in-out infinite}
          .db-r2{animation:db2 2s ease-in-out infinite .3s}
          .db-r3{animation:db1 2s ease-in-out infinite .6s}
          .db-r4{animation:db2 2s ease-in-out infinite .9s}
        `}</style>
        <rect className="db-r1" x="3" y="3" width="7" height="7" rx="1.5" fill={color}/>
        <rect className="db-r2" x="14" y="3" width="7" height="7" rx="1.5" fill={color}/>
        <rect className="db-r3" x="3" y="14" width="7" height="7" rx="1.5" fill={color}/>
        <rect className="db-r4" x="14" y="14" width="7" height="7" rx="1.5" fill={color}/>
      </svg>
    ),
    teams: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes tm-orb{0%,100%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
          @keyframes tm-p{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
          .tm-ring{animation:tm-orb 6s linear infinite;transform-origin:12px 12px}
          .tm-p1{animation:tm-p 1.6s ease-in-out infinite}
          .tm-p2{animation:tm-p 1.6s ease-in-out infinite .4s}
          .tm-p3{animation:tm-p 1.6s ease-in-out infinite .8s}
        `}</style>
        <g className="tm-p1"><circle cx="12" cy="7" r="3" fill={color}/></g>
        <g className="tm-p2"><circle cx="5.5" cy="17" r="2.3" fill={color} opacity=".7"/></g>
        <g className="tm-p3"><circle cx="18.5" cy="17" r="2.3" fill={color} opacity=".7"/></g>
        <g className="tm-ring" opacity=".3">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1" strokeDasharray="4 2"/>
        </g>
      </svg>
    ),
    players: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes pl-b{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.5px)}}
          @keyframes pl-s{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}
          .pl-m{animation:pl-b 1.8s ease-in-out infinite;transform-origin:9px 8px}
          .pl-s2{animation:pl-s 1.8s ease-in-out infinite .4s;transform-origin:17px 8px}
        `}</style>
        <g className="pl-m">
          <circle cx="9" cy="7" r="3.5" fill={color}/>
          <path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        <g className="pl-s2" opacity=".55">
          <circle cx="17" cy="7" r="2.5" fill={color}/>
          <path d="M15.5 21v-.5a3.5 3.5 0 0 1 3.5-3.5h.5" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    coaches: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes co-star{0%{transform:rotate(0) scale(1)}50%{transform:rotate(180deg) scale(1.2)}100%{transform:rotate(360deg) scale(1)}}
          .co-star{animation:co-star 3s ease-in-out infinite;transform-origin:19px 5px}
        `}</style>
        <circle cx="10" cy="8" r="4" fill={color}/>
        <path d="M4 20v-1a6 6 0 0 1 12 0v1" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <g className="co-star">
          <polygon points="19,2 20.2,4.8 23.2,4.8 21,6.6 21.9,9.5 19,7.6 16.1,9.5 17,6.6 14.8,4.8 17.8,4.8" fill="#D8A435" opacity=".9"/>
        </g>
      </svg>
    ),
    schedule: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes sc-blink{0%,100%{opacity:1}50%{opacity:0}}
          .sc-d1{animation:sc-blink 1.2s ease-in-out infinite}
          .sc-d2{animation:sc-blink 1.2s ease-in-out infinite .4s}
          .sc-d3{animation:sc-blink 1.2s ease-in-out infinite .8s}
        `}</style>
        <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth="1.8"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <line x1="8"  y1="2" x2="8"  y2="6" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.8"/>
        <circle className="sc-d1" cx="8"  cy="15" r="1.5" fill={color}/>
        <circle className="sc-d2" cx="12" cy="15" r="1.5" fill={color}/>
        <circle className="sc-d3" cx="16" cy="15" r="1.5" fill={color}/>
      </svg>
    ),
    attendance: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes att-draw{0%{stroke-dashoffset:30}100%{stroke-dashoffset:0}}
          @keyframes att-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
          .att-check{stroke-dasharray:30;animation:att-draw 1s ease-out infinite alternate}
          .att-box{animation:att-pulse 2s ease-in-out infinite;transform-origin:12px 12px}
        `}</style>
        <g className="att-box">
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        <path className="att-check" d="M9 12l3 3 9-9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    payments: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes pay-slide{0%{transform:translateX(5px);opacity:0}30%{opacity:1}100%{transform:translateX(-5px);opacity:0}}
          @keyframes pay-glow{0%,100%{opacity:.6}50%{opacity:1}}
          .pay-coin{animation:pay-slide 2s ease-in-out infinite}
          .pay-card{animation:pay-glow 2s ease-in-out infinite}
        `}</style>
        <g className="pay-card">
          <rect x="1" y="5" width="22" height="15" rx="2" stroke={color} strokeWidth="1.8"/>
          <line x1="1" y1="10" x2="23" y2="10" stroke={color} strokeWidth="1.8"/>
        </g>
        <g className="pay-coin">
          <circle cx="12" cy="15" r="2" fill={color} opacity=".85"/>
        </g>
      </svg>
    ),
    notify: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes bell-ring{0%,100%{transform:rotate(0)}15%{transform:rotate(14deg)}30%{transform:rotate(-11deg)}45%{transform:rotate(7deg)}60%{transform:rotate(-4deg)}75%{transform:rotate(2deg)}}
          .bell-b{animation:bell-ring 2.5s ease-in-out infinite;transform-origin:12px 6px}
        `}</style>
        <g className="bell-b">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    messages: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes msg-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
          @keyframes msg-dot{0%,100%{transform:scale(1)}50%{transform:scale(1.5)}}
          .msg-b{animation:msg-bounce 2s ease-in-out infinite}
          .msg-d1{animation:msg-dot 1.2s ease-in-out infinite}
          .msg-d2{animation:msg-dot 1.2s ease-in-out infinite .2s}
          .msg-d3{animation:msg-dot 1.2s ease-in-out infinite .4s}
        `}</style>
        <g className="msg-b">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <circle className="msg-d1" cx="9"  cy="10" r="1.2" fill={color}/>
          <circle className="msg-d2" cx="12" cy="10" r="1.2" fill={color}/>
          <circle className="msg-d3" cx="15" cy="10" r="1.2" fill={color}/>
        </g>
      </svg>
    ),
    prices: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes pr-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
          .pr-tag{animation:pr-spin 6s linear infinite;transform-origin:12px 12px}
        `}</style>
        <g className="pr-tag">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="7" y1="7" x2="7.01" y2="7" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
        </g>
      </svg>
    ),
    permissions: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes sh-lock{0%,70%,100%{transform:translateY(0)}40%{transform:translateY(-2px)}}
          @keyframes sh-glow{0%,100%{opacity:.5}50%{opacity:1}}
          .sh-body{animation:sh-lock 2.5s ease-in-out infinite;transform-origin:12px 14px}
          .sh-glow{animation:sh-glow 2s ease-in-out infinite}
        `}</style>
        <g className="sh-body">
          <rect x="5" y="11" width="14" height="10" rx="2" fill={`${color}20`} stroke={color} strokeWidth="1.8"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <circle className="sh-glow" cx="12" cy="16" r="1.5" fill={color}/>
        </g>
      </svg>
    ),
    sun: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes sun-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
          @keyframes sun-pulse{0%,100%{r:4.5}50%{r:5.5}}
          .sun-rays{animation:sun-spin 8s linear infinite;transform-origin:12px 12px}
          .sun-core{animation:sun-pulse 2s ease-in-out infinite}
        `}</style>
        <g className="sun-rays">
          {[0,45,90,135,180,225,270,315].map((a,i)=>(
            <line key={i}
              x1={12 + 7*Math.cos(a*Math.PI/180)} y1={12 + 7*Math.sin(a*Math.PI/180)}
              x2={12 + 9.5*Math.cos(a*Math.PI/180)} y2={12 + 9.5*Math.sin(a*Math.PI/180)}
              stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          ))}
        </g>
        <circle className="sun-core" cx="12" cy="12" r="4.5" fill={color}/>
      </svg>
    ),
    moon: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes moon-glow{0%,100%{filter:drop-shadow(0 0 3px #A855F7)}50%{filter:drop-shadow(0 0 8px #A855F7)}}
          .moon-icon{animation:moon-glow 2s ease-in-out infinite}
        `}</style>
        <g className="moon-icon">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill={color} opacity=".9"/>
        </g>
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`@keyframes srch-p{0%,100%{r:7}50%{r:8}} .srch-c{animation:srch-p 2s ease-in-out infinite}`}</style>
        <circle className="srch-c" cx="11" cy="11" r="7" stroke={color} strokeWidth="1.8"/>
        <line x1="16.5" y1="16.5" x2="21" y2="21" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    trophy: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`@keyframes tr-shine{0%,100%{opacity:.6}50%{opacity:1}} .tr-g{animation:tr-shine 2s ease-in-out infinite}`}</style>
        <g className="tr-g">
          <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M5 3H3v5a4 4 0 0 0 4 4M19 3h2v5a4 4 0 0 1-4 4" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M7 3h10v7a5 5 0 0 1-10 0V3z" stroke={color} strokeWidth="1.8"/>
        </g>
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <style>{`
          @keyframes ch-g{0%{transform:scaleY(0.2)}100%{transform:scaleY(1)}}
          .ch-b1{transform-origin:bottom;animation:ch-g 1s ease-out .1s both}
          .ch-b2{transform-origin:bottom;animation:ch-g 1s ease-out .3s both}
          .ch-b3{transform-origin:bottom;animation:ch-g 1s ease-out .5s both}
        `}</style>
        <line x1="3" y1="20" x2="21" y2="20" stroke={color} strokeWidth="1.5"/>
        <rect className="ch-b1" x="5"  y="12" width="4" height="8" rx="1" fill={color} opacity=".5"/>
        <rect className="ch-b2" x="10" y="7"  width="4" height="13" rx="1" fill={color} opacity=".75"/>
        <rect className="ch-b3" x="15" y="3"  width="4" height="17" rx="1" fill={color}/>
      </svg>
    ),
    edit:  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    trash: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><polyline points="3 6 5 6 21 6" stroke={color} strokeWidth="1.8"/><path d="M19 6l-1 14H6L5 6" stroke={color} strokeWidth="1.8"/><path d="M10 11v6M14 11v6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><path d="M9 6V4h6v2" stroke={color} strokeWidth="1.8"/></svg>,
    eye:   <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke={color} strokeWidth="1.8"/><circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.8"/></svg>,
    plus:  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>,
    close: <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  };
  return icons[type] || null;
};

/* ═══ CONSTANTS ═══════════════════════════════════════ */
const PRICE_LIST = { subscription: 350, bus: 200, uniform: 180, bag: 95, jersey: 120 };
const PAY_TYPES = {
  subscription: { label: "اشتراك شهري", icon: "💳", color: "#A855F7" },
  bus:          { label: "اشتراك الباص",  icon: "🚌", color: "#3B82F6" },
  uniform:      { label: "لبس / طقم",   icon: "👕", color: "#06B6D4" },
  bag:          { label: "شنطة",         icon: "🎒", color: "#F59E0B" },
  jersey:       { label: "قميص رسمي",   icon: "🏷️", color: "#10B981" },
};
const ATT_C = { حاضر: "#10B981", غائب: "#EF4444", بعذر: "#F59E0B" };
const fmtMoney = n => Number(n).toLocaleString("ar-SA") + " ر.س";

/* ═══ DEFAULT PERMISSIONS ═════════════════════════════ */
const DEFAULT_PERMS = { attendance: true, payments: true, evals: true, messages: true };

/* ═══ DATA ════════════════════════════════════════════ */
const INIT_GROUPS = [
  { id: "g1", name: "تحت 11", coachId: "c1", color: "#06B6D4" },
  { id: "g2", name: "تحت 13", coachId: "c2", color: "#A855F7" },
  { id: "g3", name: "تحت 15", coachId: "c3", color: "#F59E0B" },
];
const INIT_COACHES = [
  { id: "c1", name: "أحمد سالم البقمي",   phone: "0501110001", email: "ahmed@najd.sa",  password: "Coach@1234", specialty: "مهارات فردية", exp: 8,  cert: "UEFA B", groupId: "g1", joined: "2021-01-15", salary: 4500, perms: { ...DEFAULT_PERMS } },
  { id: "c2", name: "خالد مبارك العسيري", phone: "0502220002", email: "khaled@najd.sa", password: "Coach@5678", specialty: "تكتيك وخطط",  exp: 12, cert: "AFC Pro",groupId: "g2", joined: "2019-06-01", salary: 5500, perms: { ...DEFAULT_PERMS } },
  { id: "c3", name: "سعد الرشيدي",        phone: "0503330003", email: "saad@najd.sa",   password: "Coach@9012", specialty: "لياقة بدنية", exp: 6,  cert: "UEFA C", groupId: "g3", joined: "2022-03-10", salary: 4000, perms: { ...DEFAULT_PERMS } },
];
const INIT_PLAYERS = [
  { id:"p1", name:"محمد عبدالله الغامدي",   age:12, groupId:"g2", phone:"0501234567", status:"نشط",   score:85, speed:78, stamina:82, technique:90, teamwork:88, goals:12, assists:7,  attendancePct:92, weight:48, height:158, position:"مهاجم",    parentId:"par1", joinDate:"2024-09-01", email:"p1@najd.sa",  password:"Player@001" },
  { id:"p2", name:"فيصل سعد القحطاني",      age:10, groupId:"g1", phone:"0507654321", status:"نشط",   score:90, speed:88, stamina:85, technique:92, teamwork:91, goals:18, assists:11, attendancePct:96, weight:38, height:142, position:"جناح أيمن",parentId:"par2", joinDate:"2024-08-15", email:"p2@najd.sa",  password:"Player@002" },
  { id:"p3", name:"عمر خالد الزهراني",      age:14, groupId:"g3", phone:"0509876543", status:"نشط",   score:78, speed:80, stamina:75, technique:76, teamwork:80, goals:8,  assists:14, attendancePct:85, weight:58, height:170, position:"وسط",       parentId:"par3", joinDate:"2024-10-01", email:"p3@najd.sa",  password:"Player@003" },
  { id:"p4", name:"يوسف أحمد الشهري",      age:11, groupId:"g2", phone:"0501112233", status:"موقوف", score:65, speed:62, stamina:60, technique:68, teamwork:65, goals:3,  assists:2,  attendancePct:60, weight:42, height:150, position:"مدافع",     parentId:"par4", joinDate:"2024-07-20", email:"p4@najd.sa",  password:"Player@004" },
  { id:"p5", name:"بندر علي الدوسري",      age:13, groupId:"g3", phone:"0504445566", status:"نشط",   score:92, speed:94, stamina:90, technique:91, teamwork:93, goals:22, assists:9,  attendancePct:98, weight:54, height:165, position:"جناح أيسر",parentId:"par5", joinDate:"2024-09-10", email:"p5@najd.sa",  password:"Player@005" },
  { id:"p6", name:"سلطان محمد العتيبي",    age:9,  groupId:"g1", phone:"0506667788", status:"نشط",   score:88, speed:85, stamina:87, technique:89, teamwork:86, goals:15, assists:8,  attendancePct:94, weight:32, height:135, position:"مهاجم",    parentId:"par1", joinDate:"2024-11-01", email:"p6@najd.sa",  password:"Player@006" },
  { id:"p7", name:"نايف عبدالرحمن الحربي", age:12, groupId:"g2", phone:"0508889900", status:"نشط",   score:81, speed:79, stamina:83, technique:80, teamwork:84, goals:9,  assists:12, attendancePct:89, weight:46, height:155, position:"وسط",       parentId:"par6", joinDate:"2024-09-05", email:"p7@najd.sa",  password:"Player@007" },
  { id:"p8", name:"ريان فهد السبيعي",      age:10, groupId:"g1", phone:"0502223344", status:"نشط",   score:74, speed:72, stamina:70, technique:76, teamwork:77, goals:6,  assists:5,  attendancePct:80, weight:36, height:140, position:"مدافع",     parentId:"par7", joinDate:"2024-10-20", email:"p8@najd.sa",  password:"Player@008" },
];
const INIT_PARENTS = [
  { id:"par1", name:"عبدالله الغامدي",  phone:"0551234567", email:"aalghamdi@mail.com", playerIds:["p1","p6"], password:"Parent@111" },
  { id:"par2", name:"سعد القحطاني",     phone:"0557654321", email:"saqahtani@mail.com", playerIds:["p2"],      password:"Parent@222" },
  { id:"par3", name:"خالد الزهراني",    phone:"0559876543", email:"kzahrani@mail.com",  playerIds:["p3"],      password:"Parent@333" },
  { id:"par4", name:"أحمد الشهري",      phone:"0551112233", email:"ashahri@mail.com",   playerIds:["p4"],      password:"Parent@444" },
  { id:"par5", name:"علي الدوسري",      phone:"0554445566", email:"adosari@mail.com",   playerIds:["p5"],      password:"Parent@555" },
  { id:"par6", name:"عبدالرحمن الحربي", phone:"0558889900", email:"aharbi@mail.com",    playerIds:["p7"],      password:"Parent@666" },
  { id:"par7", name:"فهد السبيعي",      phone:"0552223344", email:"fsobiee@mail.com",   playerIds:["p8"],      password:"Parent@777" },
];
const INIT_PAYMENTS = [
  { id:"pay1", playerId:"p1", playerName:"محمد عبدالله الغامدي", coachId:"c2", coachName:"خالد مبارك العسيري", type:"subscription", month:"مارس 2026",  amount:350, date:"2026-03-05", note:"دفع نقدي" },
  { id:"pay2", playerId:"p1", playerName:"محمد عبدالله الغامدي", coachId:"c2", coachName:"خالد مبارك العسيري", type:"subscription", month:"أبريل 2026", amount:350, date:"2026-04-03", note:"تحويل بنكي" },
  { id:"pay3", playerId:"p1", playerName:"محمد عبدالله الغامدي", coachId:"c2", coachName:"خالد مبارك العسيري", type:"uniform",      month:"مارس 2026",  amount:180, date:"2026-03-10", note:"طقم تدريب" },
  { id:"pay4", playerId:"p2", playerName:"فيصل سعد القحطاني",    coachId:"c1", coachName:"أحمد سالم البقمي",   type:"subscription", month:"أبريل 2026", amount:350, date:"2026-04-02", note:"دفع نقدي" },
  { id:"pay5", playerId:"p2", playerName:"فيصل سعد القحطاني",    coachId:"c1", coachName:"أحمد سالم البقمي",   type:"bag",          month:"أبريل 2026", amount:95,  date:"2026-04-08", note:"شنطة رياضية" },
  { id:"pay6", playerId:"p5", playerName:"بندر علي الدوسري",     coachId:"c3", coachName:"سعد الرشيدي",        type:"subscription", month:"أبريل 2026", amount:350, date:"2026-04-01", note:"تحويل بنكي" },
  { id:"pay7", playerId:"p5", playerName:"بندر علي الدوسري",     coachId:"c3", coachName:"سعد الرشيدي",        type:"jersey",       month:"مارس 2026",  amount:120, date:"2026-03-20", note:"قميص رسمي" },
  { id:"pay8", playerId:"p6", playerName:"سلطان محمد العتيبي",   coachId:"c1", coachName:"أحمد سالم البقمي",   type:"subscription", month:"أبريل 2026", amount:350, date:"2026-04-04", note:"دفع نقدي" },
];
const INIT_ATTENDANCE = [
  { id:"att1", date:"2026-04-20", groupId:"g2", coachId:"c2", records:{ p1:"حاضر", p4:"غائب", p7:"حاضر" } },
  { id:"att2", date:"2026-04-17", groupId:"g1", coachId:"c1", records:{ p2:"حاضر", p6:"حاضر", p8:"بعذر" } },
  { id:"att3", date:"2026-04-22", groupId:"g2", coachId:"c2", records:{ p1:"حاضر", p4:"بعذر", p7:"حاضر" } },
];
const INIT_EVALS = [
  { id:"ev1", playerId:"p1", coachId:"c2", date:"2026-04-20", note:"أداء ممتاز في التمرير، يحتاج تحسين الضربات الرأسية", speed:80, technique:88, teamwork:90 },
  { id:"ev2", playerId:"p7", coachId:"c2", date:"2026-04-20", note:"تحسن ملحوظ في الدفاع، يجب التركيز على اللياقة",       speed:75, technique:78, teamwork:85 },
  { id:"ev3", playerId:"p2", coachId:"c1", date:"2026-04-17", note:"سرعة رائعة، التكتيك يحتاج تطوير",                     speed:90, technique:85, teamwork:88 },
];
const INIT_MESSAGES = [
  { id:"msg1", from:"admin", fromName:"الإدارة",              to:"par1", toName:"عبدالله الغامدي",   text:"تذكير: موعد التدريب غداً الساعة 5 مساءً في ملعب B",                   date:"2026-04-22", read:false },
  { id:"msg2", from:"c2",   fromName:"خالد مبارك العسيري",  to:"par1", toName:"عبدالله الغامدي",   text:"أداء محمد ممتاز هذا الأسبوع، أنصح بإضافة تمارين في المنزل",           date:"2026-04-20", read:true  },
  { id:"msg3", from:"admin", fromName:"الإدارة",              to:"par4", toName:"أحمد الشهري",       text:"لاحظنا تغيباً متكرراً ليوسف، نرجو التواصل مع الإدارة",               date:"2026-04-19", read:false },
  { id:"msg4", from:"par1", fromName:"عبدالله الغامدي",      to:"c2",   toName:"خالد مبارك",         text:"شكراً على الاهتمام، هل يمكن تدريب إضافي الجمعة؟",                    date:"2026-04-21", read:true  },
];
const REV_DATA = [
  { month:"أكتوبر", income:8400,  expenses:2100 },
  { month:"نوفمبر", income:9100,  expenses:2300 },
  { month:"ديسمبر", income:8700,  expenses:2000 },
  { month:"يناير",  income:10200, expenses:2500 },
  { month:"فبراير", income:11000, expenses:2700 },
  { month:"مارس",   income:10500, expenses:2400 },
  { month:"أبريل",  income:12400, expenses:2900 },
];
const INIT_COACH_ATTENDANCE = [
  { id: "ca1", date: "2026-04-20", records: { c1: "حاضر", c2: "حاضر", c3: "غائب" } },
  { id: "ca2", date: "2026-04-22", records: { c1: "حاضر", c2: "بعذر", c3: "حاضر" } },
];
const ATT_TREND = [
  { week:"أ1", حاضر:22, غائب:4, بعذر:2 },
  { week:"أ2", حاضر:24, غائب:3, بعذر:1 },
  { week:"أ3", حاضر:20, غائب:6, بعذر:2 },
  { week:"أ4", حاضر:25, غائب:2, بعذر:1 },
  { week:"أ5", حاضر:23, غائب:4, بعذر:1 },
  { week:"أ6", حاضر:26, غائب:2, بعذر:0 },
];
const POS_DATA = [
  { name:"مهاجم", value:3, color:"#EF4444" },
  { name:"وسط",   value:2, color:"#A855F7" },
  { name:"مدافع", value:2, color:"#3B82F6" },
  { name:"جناح",  value:2, color:"#10B981" },
  { name:"حارس",  value:1, color:"#F59E0B" },
];
const USERS = [
  { id:"admin", email:"admin@najd.sa",      password:"Najd@2026",  role:"admin",  name:"مدير النادي"          },
  { id:"c1",    email:"ahmed@najd.sa",      password:"Coach@1234", role:"coach",  name:"أحمد سالم البقمي"    },
  { id:"c2",    email:"khaled@najd.sa",     password:"Coach@5678", role:"coach",  name:"خالد مبارك العسيري"  },
  { id:"c3",    email:"saad@najd.sa",       password:"Coach@9012", role:"coach",  name:"سعد الرشيدي"          },
  { id:"par1",  email:"aalghamdi@mail.com", password:"Parent@111", role:"parent", name:"عبدالله الغامدي"      },
  { id:"par2",  email:"saqahtani@mail.com", password:"Parent@222", role:"parent", name:"سعد القحطاني"          },
  { id:"par3",  email:"kzahrani@mail.com",  password:"Parent@333", role:"parent", name:"خالد الزهراني"         },
  { id:"par4",  email:"ashahri@mail.com",   password:"Parent@444", role:"parent", name:"أحمد الشهري"           },
  { id:"par5",  email:"adosari@mail.com",   password:"Parent@555", role:"parent", name:"علي الدوسري"           },
  { id:"par6",  email:"aharbi@mail.com",    password:"Parent@666", role:"parent", name:"عبدالرحمن الحربي"     },
  { id:"par7",  email:"fsobiee@mail.com",   password:"Parent@777", role:"parent", name:"فهد السبيعي"           },
];

const INIT_TRAININGS = [
  { id: "tr1", groupId: "g1", coachId: "c1", days: ["الأحد", "الأربعاء"], time: "4:00 م", duration: 90, field: "ملعب A", title: "مهارات المراوغة والتحكم", trainingFocus: "مهارات فردية — تمرير قصير", note: "يرجى إحضار الحذاء الخاص بالملاعب الصناعية" },
  { id: "tr2", groupId: "g2", coachId: "c2", days: ["الاثنين", "الخميس"], time: "5:00 م", duration: 90, field: "ملعب B", title: "تطوير دقة التمرير", trainingFocus: "التكتيك الدفاعي — خطة 4-3-3", note: "التركيز على التمرير القصير" },
  { id: "tr3", groupId: "g3", coachId: "c3", days: ["الثلاثاء", "الخميس"], time: "5:30 م", duration: 90, field: "ملعب C", title: "تمارين التحمل اللياقي", trainingFocus: "لياقة بدنية — تمارين تحمّل", note: "إحضار عبوات مياه إضافية" },
];

/* ═══ HOOKS ═══════════════════════════════════════════ */
function useCounter(end, dur = 1600) {
  const [v, setV] = useState(0);
  const r = useRef();
  useEffect(() => {
    let s = null;
    const step = ts => {
      if (!s) s = ts;
      const p = Math.min((ts - s) / dur, 1);
      setV(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) r.current = requestAnimationFrame(step);
    };
    r.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(r.current);
  }, [end, dur]);
  return v;
}

/* ═══ THEME ═══════════════════════════════════════════ */
const THEMES = {
  dark: {
    bg: "#0B091A", bg2: "#12111F", bg3: "#0C0B18",
    border: "#1E1B35", border2: "#2A2050",
    text: "#E8E3FF", textMid: "#B0A4E0", textDim: "#5A4E8A", textFaint: "#3A3060",
    header: "#08071A", shadow: "rgba(124,73,168,.15)",
    cardBg: "#12111F", inputBg: "#0C0B18",
    purple: "#7C49A8", gold: "#D8A435",
    gradCard: "linear-gradient(135deg,#12111F,#0E0C1C)",
    name: "dark",
  },
  light: {
    bg: "#F4F2FB", bg2: "#FFFFFF", bg3: "#F0EDF9",
    border: "#E2DDEE", border2: "#CEC7E8",
    text: "#1A1030", textMid: "#4A3F6B", textDim: "#8B7FBB", textFaint: "#C4B8E0",
    header: "#FEFEFF", shadow: "rgba(124,73,168,.10)",
    cardBg: "#FFFFFF", inputBg: "#F8F6FF",
    purple: "#7C49A8", gold: "#B8900A",
    gradCard: "linear-gradient(135deg,#FFFFFF,#F8F5FF)",
    name: "light",
  },
};

/* ═══ SHARED UI ═══════════════════════════════════════ */
const Chip = ({ text, color = "#A855F7", size = 11 }) => (
  <span style={{ background: `${color}18`, color, fontSize: size, fontWeight: 700, padding: "3px 11px", borderRadius: 20, whiteSpace: "nowrap" }}>{text}</span>
);

function Card({ children, style, onClick, hover, t }) {
  const theme = t || THEMES.dark;
  return (
    <div onClick={onClick}
      onMouseEnter={hover ? e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 14px 40px ${theme.shadow}`; } : undefined}
      onMouseLeave={hover ? e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; } : undefined}
      style={{ background: theme.cardBg, border: `1px solid ${theme.border}`, borderRadius: 16, transition: hover ? "transform .2s,box-shadow .2s" : undefined, ...style }}>
      {children}
    </div>
  );
}

function Btn({ children, variant = "primary", onClick, style, small, disabled }) {
  const base = { border: "none", borderRadius: 10, fontFamily: "'Cairo',sans-serif", cursor: disabled ? "not-allowed" : "pointer", fontWeight: 700, transition: "all .2s", fontSize: small ? 12 : 13, padding: small ? "6px 14px" : "10px 20px", opacity: disabled ? .6 : 1, display: "inline-flex", alignItems: "center", gap: 6, ...style };
  const vs = {
    primary:   { background: "linear-gradient(135deg,#7C49A8,#5A2D82)", color: "#fff", boxShadow: "0 4px 14px rgba(124,73,168,.3)" },
    secondary: { background: "rgba(124,73,168,.1)", color: "#C4B5FD", border: "1px solid rgba(124,73,168,.22)" },
    danger:    { background: "rgba(239,68,68,.1)", color: "#EF4444", border: "1px solid rgba(239,68,68,.22)" },
    success:   { background: "rgba(16,185,129,.1)", color: "#10B981", border: "1px solid rgba(16,185,129,.22)" },
    gold:      { background: "linear-gradient(135deg,#D8A435,#A87820)", color: "#fff", boxShadow: "0 4px 14px rgba(216,164,53,.3)" },
    ghost:     { background: "transparent", color: "#8B7FBB", border: "1px solid #2A2050" },
  };
  return <button onClick={onClick} disabled={disabled} style={{ ...base, ...vs[variant] }}>{children}</button>;
}

function Input({ label, value, onChange, type = "text", options, placeholder, t }) {
  const theme = t || THEMES.dark;
  const base = { width: "100%", background: theme.inputBg, border: `1px solid ${theme.border2}`, borderRadius: 9, padding: "10px 12px", color: theme.text, fontSize: 13, outline: "none", fontFamily: "'Cairo',sans-serif" };
  return (
    <div style={{ marginBottom: 14 }}>
      {label && <label style={{ display: "block", fontSize: 11, color: theme.textDim, fontWeight: 600, marginBottom: 6 }}>{label}</label>}
      {options
        ? <select value={value} onChange={e => onChange(e.target.value)} style={base}>
            {options.map(o => <option key={o.v ?? o} value={o.v ?? o}>{o.l ?? o}</option>)}
          </select>
        : <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={base} />}
    </div>
  );
}

function Avatar({ name, size = 36, color = "#A855F7" }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: `linear-gradient(135deg,${color},${color}88)`, display: "grid", placeItems: "center", fontSize: size * .38, fontWeight: 800, color: "#fff", flexShrink: 0 }}>
      {name?.[0]}
    </div>
  );
}

function Footer({ t }) {
  const theme = t || THEMES.dark;
  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "auto", borderTop: `1px solid ${theme.border}`, fontSize: 11, color: theme.textDim, opacity: 0.8 }}>
      <div>تم تطوير نظام إدارة الأكاديميات والنوادي الرياضية <span style={{ color: "#7C49A8", fontWeight: 700 }}>" مُحْـكَـم (Mohkam) "</span></div>
      <div style={{ marginTop: 4 }}>بواسطة <span style={{ fontWeight: 600 }}>Badawi for Software Solutions and Marketing</span></div>
      <div style={{ marginTop: 4, direction: "ltr" }}>+201091089983</div>
    </div>
  );
}

function Modal({ title, onClose, children, wide, t }) {
  const theme = t || THEMES.dark;
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.8)", display: "grid", placeItems: "center", zIndex: 9999, backdropFilter: "blur(8px)" }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{ background: theme.bg2, border: `1px solid ${theme.border2}`, borderRadius: 22, padding: 30, width: `min(${wide ? "700px" : "480px"},93vw)`, maxHeight: "90vh", overflowY: "auto", animation: "scaleIn .25s ease", color: theme.text }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: theme.text }}>{title}</div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: theme.textDim, fontSize: 22, cursor: "pointer" }}><AnimIcon type="close" size={18} color={theme.textDim} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

function SkillBar({ label, val, color, t }) {
  const theme = t || THEMES.dark;
  return (
    <div style={{ marginBottom: 13 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 5 }}>
        <span style={{ color: theme.textDim }}>{label}</span>
        <span style={{ fontWeight: 700, color }}>{val}</span>
      </div>
      <div style={{ height: 6, background: theme.border, borderRadius: 3 }}>
        <div style={{ height: "100%", borderRadius: 3, background: `linear-gradient(90deg,${color},${color}66)`, width: `${val}%`, transition: "width 1.2s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

function StatCard({ label, counter, value, icon, color, sub, t }) {
  const theme = t || THEMES.dark;
  const cnt = useCounter(counter ?? 0, 1600);
  const display = counter !== undefined ? cnt.toLocaleString() : value;
  return (
    <Card hover t={theme} style={{ padding: "20px 18px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: color, opacity: .07 }} />
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 11, color: theme.textDim, fontWeight: 600 }}>{label}</span>
        <span style={{ fontSize: 18 }}>{icon}</span>
      </div>
      <div style={{ fontSize: 26, fontWeight: 900, color, letterSpacing: "-.02em" }}>{display}</div>
      {sub && <div style={{ fontSize: 11, color: theme.textFaint, marginTop: 4 }}>{sub}</div>}
    </Card>
  );
}

const ArabicTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{ background: "#1A1430", border: "1px solid #2A2050", borderRadius: 10, padding: "10px 14px", direction: "rtl", fontSize: 12 }}>
      <div style={{ color: "#C4B5FD", fontWeight: 700, marginBottom: 6 }}>{label}</div>
      {payload.map((p, i) => <div key={i} style={{ color: p.color, marginBottom: 3 }}>{p.name}: <b>{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</b></div>)}
    </div>
  );
};

/* ═══ LOGIN ═══════════════════════════════════════════ */
function LoginPage({ onLogin, players = [], coaches = [], t }) {
  const [email, setEmail] = useState("");
  const [pass, setPass]   = useState("");
  const [showP, setShowP] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = () => {
    setLoading(true); setError("");
    setTimeout(async () => {
      if (API_URL) {
        try {
          const res = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.trim(), password: pass })
          });
          const data = await res.json();
          if (res.ok) onLogin(data);
          else setError(data.error || "خطأ في الدخول");
        } catch (e) {
          setError("تعذر الاتصال بالسيرفر");
        }
      } else {
        // 1. Check static USERS
        let found = USERS.find(u => u.email === email.trim() && u.password === pass);
        
        // 2. Check dynamic Players (Parents)
        if (!found) {
          const p = players.find(x => x.email === email.trim() && x.password === pass);
          if (p) {
            found = { id: `par_${p.id}`, email: p.email, role: "parent", name: `ولي أمر ${p.name}`, playerIds: [p.id] };
          }
        }

        // 3. Check dynamic Coaches
        if (!found) {
          const c = coaches.find(x => x.email === email.trim() && x.password === pass);
          if (c) {
            found = { ...c, role: "coach" };
          }
        }

        if (found) onLogin(found);
        else setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
      setLoading(false);
    }, 700);
  };

  const demos = [
    { label: "الإدارة",  email: "admin@najd.sa",      pass: "Najd@2026",  color: "#7C49A8" },
    { label: "مدرب",     email: "khaled@najd.sa",     pass: "Coach@5678", color: "#06B6D4" },
    { label: "ولي أمر",  email: "aalghamdi@mail.com", pass: "Parent@111", color: "#10B981" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#08071A", position: "relative", overflow: "hidden", padding: 20 }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 55% at 50% 20%,rgba(124,73,168,.2) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(124,73,168,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(124,73,168,.04) 1px,transparent 1px)", backgroundSize: "55px 55px" }} />
      <div style={{ position: "absolute", top: "18%", right: "8%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(216,164,53,.07),transparent 70%)", animation: "float 6s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "15%", left: "6%", width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,73,168,.1),transparent 70%)", animation: "float 4s ease-in-out infinite 1.5s" }} />

      <div style={{ position: "relative", zIndex: 1, width: "min(430px,100%)" }}>
        <div style={{ textAlign: "center", marginBottom: 32, animation: "fadeUp .6s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 110, height: 110, borderRadius: 28, background: "linear-gradient(135deg,rgba(124,73,168,.14),rgba(124,73,168,.04))", border: "1px solid rgba(124,73,168,.3)", marginBottom: 16, boxShadow: "0 0 40px rgba(124,73,168,.18)" }}>
            <NajdLogo size={85} />
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 6, letterSpacing: "-.02em" }}>
            نادي <span style={{ color: "#D8A435" }}>نجد</span> الرياض
          </h1>
          <p style={{ fontSize: 14, color: "#5A4E8A", fontWeight: 600 }}>أكاديمية كرة القدم — بوابة الدخول الموحدة</p>
        </div>

        <div style={{ background: "rgba(18,17,31,.88)", border: "1px solid rgba(124,73,168,.22)", borderRadius: 24, padding: "32px 28px", backdropFilter: "blur(20px)", animation: "fadeUp .6s .15s ease both", opacity: 0 }}>
          <div style={{ marginBottom: 18 }}>
            <label style={{ display: "block", fontSize: 12, color: "#8B7FBB", fontWeight: 600, marginBottom: 8 }}>البريد الإلكتروني</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="example@najd.sa"
              onFocus={e => e.target.style.borderColor = "#7C49A8"} onBlur={e => e.target.style.borderColor = "#2A2050"}
              style={{ width: "100%", background: "rgba(12,11,24,.8)", border: "1px solid #2A2050", borderRadius: 11, padding: "12px 15px", color: "#E8E3FF", fontSize: 14, outline: "none", fontFamily: "'Cairo',sans-serif", transition: "border .2s" }} />
          </div>
          <div style={{ marginBottom: 20, position: "relative" }}>
            <label style={{ display: "block", fontSize: 12, color: "#8B7FBB", fontWeight: 600, marginBottom: 8 }}>كلمة المرور</label>
            <input type={showP ? "text" : "password"} value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••"
              onKeyDown={e => e.key === "Enter" && handle()}
              onFocus={e => e.target.style.borderColor = "#7C49A8"} onBlur={e => e.target.style.borderColor = "#2A2050"}
              style={{ width: "100%", background: "rgba(12,11,24,.8)", border: "1px solid #2A2050", borderRadius: 11, padding: "12px 42px 12px 15px", color: "#E8E3FF", fontSize: 14, outline: "none", fontFamily: "'Cairo',sans-serif", transition: "border .2s" }} />
            <button onClick={() => setShowP(s => !s)} style={{ position: "absolute", left: 13, top: 33, background: "none", border: "none", color: "#5A4E8A", cursor: "pointer", fontSize: 16 }}>
              {showP ? "🙈" : "👁️"}
            </button>
          </div>
          {error && <div style={{ background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.3)", borderRadius: 10, padding: "10px 14px", fontSize: 13, color: "#FCA5A5", marginBottom: 16, textAlign: "center" }}>⚠️ {error}</div>}
          <button onClick={handle} disabled={loading || !email || !pass}
            style={{ width: "100%", background: loading ? "#2A2050" : "linear-gradient(135deg,#7C49A8,#5A2D82)", color: "#fff", border: "none", borderRadius: 12, padding: 14, fontSize: 15, fontWeight: 800, cursor: loading || !email || !pass ? "not-allowed" : "pointer", transition: "all .3s", boxShadow: "0 6px 20px rgba(124,73,168,.32)", marginBottom: 6, opacity: loading || !email || !pass ? .65 : 1, fontFamily: "'Cairo',sans-serif" }}>
            {loading ? "جارٍ التحقق..." : "دخول ←"}
          </button>
          <div style={{ marginTop: 20, padding: "14px", background: "rgba(124,73,168,.06)", borderRadius: 12, border: "1px solid rgba(124,73,168,.1)" }}>
            <div style={{ fontSize: 11, color: "#5A4E8A", fontWeight: 600, marginBottom: 9, textAlign: "center" }}>تجربة سريعة</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {demos.map(d => (
                <button key={d.email} onClick={() => { setEmail(d.email); setPass(d.pass); }}
                  style={{ background: `${d.color}0E`, border: `1px solid ${d.color}22`, color: d.color, borderRadius: 9, padding: "7px 13px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Cairo',sans-serif" }}>
                  <span>{d.label}</span>
                  <span style={{ color: "#4A3D7A", fontSize: 10 }}>{d.email}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <Footer t={t} />
      </div>
    </div>
  );
}

/* ═══ SHELL ═══════════════════════════════════════════ */
function Shell({ title, subtitle, color, icon, tabs, activeTab, setActiveTab, onLogout, badge, user, t, children }) {
  const theme = t || THEMES.dark;
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: theme.bg }}>
      <header style={{ background: theme.header, borderBottom: `1px solid ${theme.border}`, padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66, flexShrink: 0, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <NajdLogo size={38} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: theme.text }}>{title}</div>
            <div style={{ fontSize: 11, color: theme.textDim }}>{subtitle}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {badge && <div style={{ background: `${color}18`, border: `1px solid ${color}30`, color, fontSize: 12, fontWeight: 700, padding: "5px 13px", borderRadius: 20 }}>{badge}</div>}
          <div style={{ fontSize: 12, color: theme.textDim, textAlign: "left" }}>{user?.name}</div>
          <button onClick={onLogout} style={{ background: "rgba(239,68,68,.1)", border: "1px solid rgba(239,68,68,.2)", color: "#EF4444", borderRadius: 9, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Cairo',sans-serif" }}>خروج</button>
        </div>
      </header>
      <div style={{ background: theme.header, borderBottom: `1px solid ${theme.border}`, padding: "0 24px", display: "flex", gap: 0, overflowX: "auto", flexShrink: 0 }}>
        {tabs.map(tb => (
          <button key={tb.id} onClick={() => setActiveTab(tb.id)}
            style={{ background: "transparent", border: "none", borderBottom: activeTab === tb.id ? `2.5px solid ${color}` : "2.5px solid transparent", color: activeTab === tb.id ? theme.text : theme.textDim, padding: "13px 18px", fontSize: 13, fontWeight: activeTab === tb.id ? 700 : 500, whiteSpace: "nowrap", cursor: "pointer", transition: "all .15s", display: "flex", alignItems: "center", gap: 7, fontFamily: "'Cairo',sans-serif" }}>
            <AnimIcon type={tb.icon} size={15} color={activeTab === tb.id ? color : theme.textDim} />
            {tb.label}
            {tb.badge ? <span style={{ background: "#EF4444", color: "#fff", borderRadius: 20, fontSize: 10, padding: "1px 6px", fontWeight: 800 }}>{tb.badge}</span> : null}
          </button>
        ))}
      </div>
      <div style={{ flex: 1, overflowY: "auto", padding: "24px", background: theme.bg, display: "flex", flexDirection: "column" }}>
        <div key={activeTab} style={{ flex: 1 }}>{children}</div>
        <Footer t={theme} />
      </div>
    </div>
  );
}

/* ═══ ROOT APP ════════════════════════════════════════ */
export default function App() {
  const [user, setUser]         = useState(() => {
    const saved = localStorage.getItem('najd_logged_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [attendance, setAttendance] = useState(() => JSON.parse(localStorage.getItem('najd_attendance') || '[]'));
  const [evals, setEvals] = useState(() => JSON.parse(localStorage.getItem('najd_evals') || '[]'));
  const [messages, setMessages] = useState(() => JSON.parse(localStorage.getItem('najd_messages') || '[]'));
  const [prices, setPrices] = useState(() => JSON.parse(localStorage.getItem('najd_prices') || JSON.stringify(PRICE_LIST)));
  const [trainings, setTrainings] = useState(() => JSON.parse(localStorage.getItem('najd_trainings') || '[]'));
  const [coachesAttendance, setCoachesAttendance] = useState(() => JSON.parse(localStorage.getItem('najd_coachesAttendance') || '[]'));

  const [groups, setGroups] = useState(() => JSON.parse(localStorage.getItem('najd_groups') || '[]'));
  const [coaches, setCoaches] = useState(() => JSON.parse(localStorage.getItem('najd_coaches') || '[]'));
  const [players, setPlayers] = useState(() => JSON.parse(localStorage.getItem('najd_players') || '[]'));
  const [payments, setPayments] = useState(() => JSON.parse(localStorage.getItem('najd_payments') || '[]'));
  const [theme, setTheme] = useState(() => localStorage.getItem('najd_theme') || "dark");
  
  // Coordinate updates between tabs
  const setLastUpdate = () => localStorage.setItem('najd_last_update', Date.now().toString());
  const isRecentlyUpdated = () => {
    const last = parseInt(localStorage.getItem('najd_last_update') || '0');
    return (Date.now() - last < 45000);
  };

  // Sync logged-in user if their data (like perms) changes in the main list
  useEffect(() => {
    if (user && user.role === 'coach') {
      const coachData = coaches.find(c => c.userId === user.id || c.id === user.id);
      if (coachData) {
        const updatedUser = { ...coachData, role: 'coach' };
        if (JSON.stringify(updatedUser) !== JSON.stringify(user)) {
          setUser(updatedUser);
        }
      }
    }
  }, [coaches, user]);

  useEffect(() => {
    if (user) localStorage.setItem('najd_logged_user', JSON.stringify(user));
    else localStorage.removeItem('najd_logged_user');
  }, [user]);

  // Fetch from API if configured
  useEffect(() => {
    if (API_URL) {
      const fetchData = async () => {
        if (isRecentlyUpdated()) return;
        
        try {
          const res = await fetch(`${API_URL}/api/initial-data`);
          if (!res.ok) throw new Error("Fetch failed");
          const data = await res.json();
          
          if (isRecentlyUpdated()) return; 

          const merge = (local, remote) => {
            if (!remote) return local;
            const res = [...local];
            const localIds = new Set(local.map(l => l.id));
            
            remote.forEach(r => {
              if (!localIds.has(r.id)) {
                res.push(r);
              } else {
                // If it exists in both, only update from remote if NOT recently updated
                if (!isRecentlyUpdated()) {
                  const idx = res.findIndex(l => l.id === r.id);
                  res[idx] = r;
                }
              }
            });
            return res;
          };

          if (data.coaches)  setCoaches(prev => merge(prev, data.coaches));
          if (data.payments) setPayments(prev => merge(prev, data.payments));
          if (data.players)  setPlayers(prev => merge(prev, data.players));
          if (data.groups)   setGroups(prev => merge(prev, data.groups));
          if (data.attendance) setAttendance(prev => merge(prev, data.attendance));
          if (data.coachesAttendance) setCoachesAttendance(prev => merge(prev, data.coachesAttendance));
          if (data.evals) setEvals(prev => merge(prev, data.evals));
          if (data.messages) setMessages(prev => merge(prev, data.messages));
          if (data.trainings) setTrainings(prev => merge(prev, data.trainings));
        } catch (e) {
          console.error("API Fetch Error:", e);
        }
      };
      
      fetchData();
      const interval = setInterval(fetchData, 10000); // Polling for everyone
      return () => clearInterval(interval);
    }
  }, [user?.role]);

  useEffect(() => {
    localStorage.setItem('najd_players', JSON.stringify(players));
    localStorage.setItem('najd_coaches', JSON.stringify(coaches));
    localStorage.setItem('najd_groups', JSON.stringify(groups));
    localStorage.setItem('najd_payments', JSON.stringify(payments));
    localStorage.setItem('najd_attendance', JSON.stringify(attendance));
    localStorage.setItem('najd_coachesAttendance', JSON.stringify(coachesAttendance));
    localStorage.setItem('najd_evals', JSON.stringify(evals));
    localStorage.setItem('najd_messages', JSON.stringify(messages));
    localStorage.setItem('najd_prices', JSON.stringify(prices));
    localStorage.setItem('najd_trainings', JSON.stringify(trainings));
    localStorage.setItem('najd_theme', theme);
  }, [players, coaches, groups, payments, attendance, coachesAttendance, evals, messages, prices, trainings, theme]);

  useEffect(() => {
    const handleStorage = (e) => {
      if (!e.newValue) return;
      try {
        const val = JSON.parse(e.newValue);
        if (e.key === 'najd_players') setPlayers(val);
        if (e.key === 'najd_coaches') setCoaches(val);
        if (e.key === 'najd_groups') setGroups(val);
        if (e.key === 'najd_payments') setPayments(val);
        if (e.key === 'najd_attendance') setAttendance(val);
        if (e.key === 'najd_coachesAttendance') setCoachesAttendance(val);
        if (e.key === 'najd_evals') setEvals(val);
        if (e.key === 'najd_messages') setMessages(val);
        if (e.key === 'najd_prices') setPrices(val);
        if (e.key === 'najd_trainings') setTrainings(val);
        if (e.key === 'najd_theme') setTheme(e.newValue);
      } catch (e) {}
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const shared = {
    attendance, setAttendance: (val) => {
      if (typeof val === 'function') {
        setAttendance(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/attendance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setAttendance(val);
      }
    },
    coachesAttendance, setCoachesAttendance: (val) => {
      if (typeof val === 'function') {
        setCoachesAttendance(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/coaches-attendance`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setCoachesAttendance(val);
      }
    },
    evals, setEvals: (val) => {
      if (typeof val === 'function') {
        setEvals(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/evals`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setEvals(val);
      }
    },
    messages, setMessages: (val) => {
      if (typeof val === 'function') {
        setMessages(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setMessages(val);
      }
    },
    prices, setPrices: (val) => {
      if (typeof val === 'function') {
        setPrices(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            fetch(`${API_URL}/api/prices`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(next)
            }).catch(console.error);
          }
          return next;
        });
      } else {
        setPrices(val);
      }
    },
    groups, setGroups: (val) => {
      if (typeof val === 'function') {
        setGroups(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/groups`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setGroups(val);
      }
    },
    coaches, setCoaches: (val) => {
      if (typeof val === 'function') {
        setCoaches(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/coaches`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setCoaches(val);
      }
    },
    players, setPlayers: (val) => {
      if (typeof val === 'function') {
        setPlayers(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/players`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setPlayers(val);
      }
    },
    payments, setPayments: (val) => {
      if (typeof val === 'function') {
        setPayments(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/payments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setPayments(val);
      }
    },
    trainings, setTrainings: (val) => {
      if (typeof val === 'function') {
        setTrainings(prev => {
          const next = val(prev);
          setLastUpdate();
          if (API_URL) {
            const changed = next.filter(item => {
              const old = prev.find(x => x.id === item.id);
              return !old || JSON.stringify(old) !== JSON.stringify(item);
            });
            changed.forEach(item => {
              fetch(`${API_URL}/api/trainings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
              }).catch(console.error);
            });
          }
          return next;
        });
      } else {
        setTrainings(val);
      }
    },
    theme, setTheme,
    t: THEMES[theme]
  };

  if (!user) return <LoginPage onLogin={setUser} {...shared} />;

  return (
    <div style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl", height: "100vh" }}>
      {user.role === "admin"
        ? <AdminPortal  user={user} onLogout={() => setUser(null)} {...shared} setLastUpdate={setLastUpdate}/>
        : user.role === "coach"
          ? <CoachPortal  user={user} onLogout={() => setUser(null)} {...shared} setLastUpdate={setLastUpdate}/>
          : <ParentPortal user={user} onLogout={() => setUser(null)} {...shared} loginUser={user} />
      }
    </div>
  );
}

/* ═══ ADMIN PORTAL ════════════════════════════════════ */
function AdminPortal({ user, onLogout, players, setPlayers, coaches, setCoaches, groups, setGroups, payments, setPayments, attendance, setAttendance, coachesAttendance, setCoachesAttendance, evals, setEvals, messages, setMessages, prices, setPrices, trainings, setTrainings, theme, setTheme, t, setLastUpdate }) {
  const [tab, setTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "الرئيسية",    icon: "dashboard" },
    { id: "teams",     label: "المجموعات",  icon: "teams" },
    { id: "players",   label: "اللاعبون",    icon: "players" },
    { id: "coaches",   label: "المدربون",   icon: "coaches" },
    { id: "schedule",  label: "جدول التمارين", icon: "schedule" },
    { id: "attendance",label: "الحضور",     icon: "attendance" },
    { id: "payments",  label: "المالية",     icon: "payments" },
    { id: "messages",  label: "الرسائل",     icon: "messages", badge: messages.filter(m => !m.read && m.to === "admin").length },
    { id: "prices",    label: "الإعدادات",   icon: "prices" },
  ];

  return (
    <Shell title="نادي نجد الرياضي" subtitle="لوحة تحكم الإدارة" color="#7C49A8" icon="dashboard" tabs={tabs} activeTab={tab} setActiveTab={setTab} onLogout={onLogout} badge="المدير العام" user={user} t={t}>
      {tab === "dashboard" && <AdminDashboard players={players} coaches={coaches} groups={groups} payments={payments} attendance={attendance} t={t}/>}
      {tab === "teams"     && <AdminGroups groups={groups} setGroups={setGroups} coaches={coaches} players={players} t={t}/>}
      {tab === "players"   && <AdminPlayers players={players} setPlayers={setPlayers} groups={groups} t={t}/>}
      {tab === "coaches"   && <AdminCoaches coaches={coaches} setCoaches={setCoaches} groups={groups} players={players} payments={payments} t={t}/>}
      {tab === "schedule"  && <AdminTrainings trainings={trainings} setTrainings={setTrainings} groups={groups} coaches={coaches} t={t} setLastUpdate={setLastUpdate}/>}
      {tab === "attendance"&& <AdminAttendance players={players} groups={groups} coaches={coaches} attendance={attendance} setAttendance={setAttendance} coachesAttendance={coachesAttendance} setCoachesAttendance={setCoachesAttendance} t={t}/>}
      {tab === "payments"  && <AdminPayments payments={payments} setPayments={setPayments} players={players} coaches={coaches} groups={groups} t={t}/>}
      {tab === "messages"  && <AdminMessages messages={messages} setMessages={setMessages} players={players} coaches={coaches} t={t}/>}
      {tab === "prices"    && <AdminPrices prices={prices} setPrices={setPrices} theme={theme} setTheme={setTheme} t={t}/>}
    </Shell>
  );
}

/* ── Admin Dashboard ────────────────────────────────── */
function AdminDashboard({ players, coaches, groups, payments, attendance, t }) {
  const rev = payments.reduce((a, p) => a + p.amount, 0);
  const activeP = players.filter(p => p.status === "نشط").length;
  
  return (
    <div style={{ animation: "fadeIn .4s ease" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginBottom: 24 }}>
        <StatCard label="إجمالي اللاعبين" counter={players.length} icon="⚽" color="#06B6D4" sub={`${activeP} لاعب نشط حالياً`} t={t}/>
        <StatCard label="الكادر التدريبي" counter={coaches.length} icon="👔" color="#A855F7" sub={`${groups.length} مجموعات تدريبية`} t={t}/>
        <StatCard label="إجمالي الإيرادات" counter={rev} icon="💰" color="#10B981" value={fmtMoney(rev)} sub="منذ بداية الموسم" t={t}/>
        <StatCard label="نسبة الحضور"     counter={88} icon="📈" value="88%" color="#F59E0B" sub="متوسط جميع المجموعات" t={t}/>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }}>
        <Card t={t} style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: t.text }}>الإيرادات والمصروفات</div>
              <div style={{ fontSize: 11, color: t.textDim }}>النمو المالي خلال السبعة أشهر الماضية</div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7C49A8" }}/> <span style={{ fontSize: 10, color: t.textDim }}>الدخل</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}><div style={{ width: 8, height: 8, borderRadius: "50%", background: "#06B6D4" }}/> <span style={{ fontSize: 10, color: t.textDim }}>المصاريف</span></div>
            </div>
          </div>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REV_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="gI" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#7C49A8" stopOpacity={0.3}/><stop offset="95%" stopColor="#7C49A8" stopOpacity={0}/></linearGradient>
                  <linearGradient id="gE" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/><stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={t.border} vertical={false}/>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: t.textDim, fontSize: 10 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: t.textDim, fontSize: 10 }} />
                <Tooltip content={<ArabicTooltip />} />
                <Area type="monotone" name="الدخل" dataKey="income"   stroke="#7C49A8" strokeWidth={3} fillOpacity={1} fill="url(#gI)" />
                <Area type="monotone" name="المصاريف" dataKey="expenses" stroke="#06B6D4" strokeWidth={3} fillOpacity={1} fill="url(#gE)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card t={t} style={{ padding: 24 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: t.text, marginBottom: 20 }}>توزيع المراكز</div>
          <div style={{ height: 280, position: "relative" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={POS_DATA} cx="50%" cy="50%" innerRadius={65} outerRadius={85} paddingAngle={5} dataKey="value">
                  {POS_DATA.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip content={<ArabicTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: t.text }}>{players.length}</div>
                <div style={{ fontSize: 10, color: t.textDim }}>إجمالي اللاعبين</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 12px", marginTop: 10 }}>
            {POS_DATA.map(p => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color }}/>
                <span style={{ fontSize: 11, color: t.textMid }}>{p.name}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: t.textDim, marginRight: "auto" }}>{p.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ── Admin Groups ───────────────────────────────────── */
function AdminGroups({ groups, setGroups, coaches, players, t }) {
  const [modal, setModal] = useState(false);
  const [form, setForm]   = useState({ name: "", coachId: coaches[0]?.id || "", color: "#7C49A8" });

  const save = () => {
    if (!form.name.trim()) return;
    setGroups(g => [...g, { ...form, id: `g${Date.now()}` }]);
    setModal(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Btn onClick={() => setModal(true)}>
          <AnimIcon type="plus" size={14} color="#fff" /> إضافة مجموعة
        </Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        {groups.map(g => {
          const c = coaches.find(x => x.id === g.coachId);
          const pCount = players.filter(p => p.groupId === g.id).length;
          return (
            <Card key={g.id} hover t={t} style={{ padding: 22, borderTop: `4px solid ${g.color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 17, color: t.text }}>{g.name}</div>
                <Chip text={`${pCount} لاعب`} color={g.color}/>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, background: t.bg, padding: "10px 14px", borderRadius: 12, marginBottom: 16 }}>
                <Avatar name={c?.name || "?"} size={32} color={g.color}/>
                <div>
                  <div style={{ fontSize: 10, color: t.textDim }}>المدرب المسؤول</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: t.textMid }}>{c?.name || "غير معين"}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <Btn small variant="ghost" style={{ flex: 1 }}>عرض اللاعبين</Btn>
                <Btn small variant="ghost" onClick={() => setGroups(gs => gs.filter(x => x.id !== g.id))}><AnimIcon type="trash" size={13}/></Btn>
              </div>
            </Card>
          );
        })}
      </div>
      {modal && (
        <Modal title="إضافة مجموعة جديدة" onClose={() => setModal(false)} t={t}>
          <Input label="اسم المجموعة" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="مثال: تحت 12 سنة" t={t}/>
          <Input label="المدرب" value={form.coachId} onChange={v => setForm({ ...form, coachId: v })} options={coaches.map(c => ({ v: c.id, l: c.name }))} t={t}/>
          <Input label="لون الميز" value={form.color} onChange={v => setForm({ ...form, color: v })} type="color" t={t}/>
          <Btn onClick={save} style={{ width: "100%", marginTop: 10 }}>💾 حفظ المجموعة</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Admin Players ──────────────────────────────────── */
function AdminPlayers({ players, setPlayers, groups, t }) {
  const [modal, setModal] = useState(false);
  const [sel, setSel]     = useState(null);
  const empty = { name: "", age: 10, groupId: groups[0]?.id || "", status: "نشط", phone: "", position: "وسط", parentId: "" };
  const [form, setForm]   = useState(empty);

  const save = () => {
    if (!form.name.trim()) return;
    const email = `${form.name.split(" ")[0].toLowerCase()}${Math.floor(Math.random()*1000)}@najd.sa`;
    const password = `Najd@${Math.floor(Math.random()*9000)+1000}`;
    setPlayers(p => [...p, { ...form, id: `p${Date.now()}`, email, password, joinDate: new Date().toISOString().split("T")[0], score: 50, speed: 50, stamina: 50, technique: 50, teamwork: 50, goals: 0, assists: 0, attendancePct: 0 }]);
    setModal(false);
  };

  if (sel) {
    const p = players.find(x => x.id === sel);
    if (!p) { setSel(null); return null; }
    const g = groups.find(x => x.id === p.groupId);
    return (
      <div style={{ animation: "fadeIn .3s ease" }}>
        <button onClick={() => setSel(null)} style={{ background: t.bg2, border: `1px solid ${t.border}`, color: t.textDim, borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", marginBottom: 18, fontFamily: "'Cairo',sans-serif" }}>← رجوع للقائمة</button>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 20 }}>
          <Card t={t} style={{ padding: 24 }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <Avatar name={p.name} size={70} color={g?.color || "#A855F7"}/>
              <div style={{ fontWeight: 900, fontSize: 18, marginTop: 14, color: t.text }}>{p.name}</div>
              <div style={{ color: t.textDim, fontSize: 12, marginTop: 4 }}>ID: {p.id} · {p.position}</div>
            </div>
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              <div style={{ flex: 1, background: t.bg, borderRadius: 12, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: t.textFaint }}>العمر</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: t.purple }}>{p.age}</div>
              </div>
              <div style={{ flex: 1, background: t.bg, borderRadius: 12, padding: 12, textAlign: "center" }}>
                <div style={{ fontSize: 10, color: t.textFaint }}>المجموعة</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: g?.color }}>{g?.name}</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[["الجوال", p.phone], ["تاريخ الانضمام", p.dateJoin || p.joinDate], ["البريد", p.email], ["كلمة المرور", p.password || "—"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid ${t.border}`, paddingBottom: 8 }}>
                  <span style={{ fontSize: 11, color: t.textDim }}>{k}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: t.textMid }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              <StatCard label="الأهداف" counter={p.goals} icon="⚽" color="#10B981" t={t}/>
              <StatCard label="الصناعة" counter={p.assists} icon="👟" color="#06B6D4" t={t}/>
              <StatCard label="الحضور" counter={p.attendancePct} icon="📅" value={`${p.attendancePct}%`} color="#A855F7" t={t}/>
            </div>
            <Card t={t} style={{ padding: 24 }}>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 18, color: t.text }}>القدرات الفنية والبدنية</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 30px" }}>
                <SkillBar label="السرعة" val={p.speed} color="#EF4444" t={t}/>
                <SkillBar label="اللياقة" val={p.stamina} color="#F59E0B" t={t}/>
                <SkillBar label="المهارة" val={p.technique} color="#06B6D4" t={t}/>
                <SkillBar label="التعاون" val={p.teamwork} color="#10B981" t={t}/>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <Btn variant="secondary" small>تصدير Excel</Btn>
          <Btn variant="secondary" small>فرز حسب المجموعة</Btn>
        </div>
        <Btn onClick={() => setModal(true)}><AnimIcon type="plus" size={14} color="#fff" /> إضافة لاعب جديد</Btn>
      </div>
      <div style={{ background: t.bg2, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
          <thead>
            <tr style={{ background: t.bg3, borderBottom: `1px solid ${t.border}` }}>
              {["اللاعب", "العمر", "المجموعة", "الحالة", "التقييم", "الإجراء"].map(h => <th key={h} style={{ padding: "16px 20px", fontSize: 12, color: t.textDim, fontWeight: 700 }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {players.map(p => {
              const g = groups.find(x => x.id === p.groupId);
              return (
                <tr key={p.id} className={t.name === "dark" ? "rh" : "rhl"} style={{ borderBottom: `1px solid ${t.border}`, transition: "background .15s" }}>
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <Avatar name={p.name} size={36} color={g?.color || "#7C49A8"}/>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: t.text }}>{p.name}</div>
                        <div style={{ fontSize: 10, color: t.textDim }}>{p.position}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "14px 20px", fontSize: 13, color: t.textMid }}>{p.age} سنة</td>
                  <td style={{ padding: "14px 20px" }}><Chip text={g?.name || "—"} color={g?.color || t.textDim}/></td>
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 20, background: p.status === "نشط" ? "rgba(16,185,129,.1)" : "rgba(239,68,68,.1)", color: p.status === "نشط" ? "#10B981" : "#EF4444", fontSize: 10, fontWeight: 800 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.status === "نشط" ? "#10B981" : "#EF4444" }}/> {p.status}
                    </div>
                  </td>
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ width: 100, height: 6, background: t.border, borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${p.score}%`, background: p.score > 80 ? "#10B981" : p.score > 60 ? "#F59E0B" : "#EF4444" }} />
                    </div>
                  </td>
                  <td style={{ padding: "14px 20px" }}>
                    <div style={{ display: "flex", gap: 8 }}>
                      <Btn small variant="ghost" onClick={() => setSel(p.id)}><AnimIcon type="eye" size={12} color={t.purple}/> تفاصيل</Btn>
                      <Btn small variant="ghost" onClick={() => setPlayers(ps => ps.filter(x => x.id !== p.id))}><AnimIcon type="trash" size={12} color="#EF4444"/></Btn>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {modal && (
        <Modal title="إضافة لاعب جديد" onClose={() => setModal(false)} wide t={t}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 18px" }}>
            <Input label="اسم اللاعب الكامل" value={form.name} onChange={v => setForm({ ...form, name: v })} t={t}/>
            <Input label="الجوال" value={form.phone} onChange={v => setForm({ ...form, phone: v })} t={t}/>
            <Input label="العمر" value={form.age} onChange={v => setForm({ ...form, age: +v })} type="number" t={t}/>
            <Input label="المجموعة" value={form.groupId} onChange={v => setForm({ ...form, groupId: v })} options={groups.map(g => ({ v: g.id, l: g.name }))} t={t}/>
            <Input label="المركز" value={form.position} onChange={v => setForm({ ...form, position: v })} options={["مهاجم", "وسط", "مدافع", "حارس", "جناح أيمن", "جناح أيسر"]} t={t}/>
            <Input label="الحالة" value={form.status} onChange={v => setForm({ ...form, status: v })} options={["نشط", "موقوف", "مصاب"]} t={t}/>
          </div>
          <Btn onClick={save} style={{ width: "100%", marginTop: 10 }}>💾 تسجيل اللاعب</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Admin Coaches ──────────────────────────────────── */
function AdminCoaches({ coaches, setCoaches, groups, players, payments, t }) {
  const [sel, setSel] = useState(null);
  const [modal, setModal] = useState(null);
  const [syncing, setSyncing] = useState(null);
  const empty = { name: "", phone: "", email: "", password: "", specialty: "", exp: 0, cert: "", groupId: "", salary: 0, perms: { ...DEFAULT_PERMS } };
  const [form, setForm] = useState(empty);
  const PERM_LABELS = [
    { key: "attendance", label: "تسجيل الحضور والغياب", icon: "attendance" },
    { key: "payments",   label: "استلام وتسجيل المدفوعات", icon: "payments" },
    { key: "evals",      label: "إضافة تقييمات اللاعبين", icon: "trophy" },
    { key: "messages",   label: "إرسال واستقبال الرسائل", icon: "messages" },
  ];

  const save = async () => {
    if (!form.name.trim()) return;
    let coachData = { ...form };
    if (modal === "add") {
      const id = `c${Date.now()}`;
      const email = `${form.name.split(" ")[0].toLowerCase()}${Math.floor(Math.random()*1000)}@najd.sa`;
      const password = `Najd@${Math.floor(Math.random()*9000)+1000}`;
      coachData = { ...form, id, email, password, joined: new Date().toISOString().split("T")[0] };
      setCoaches(c => [...c, coachData]);
    } else {
      setCoaches(c => c.map(x => x.id === form.id ? form : x));
    }
    
    if (API_URL) {
      try {
        await fetch(`${API_URL}/api/coaches`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(coachData)
        });
      } catch (e) {
        console.error("Coach save failed:", e);
      }
    }
    
    setModal(null);
    if (sel) setSel(null);
  };

  const togglePerm = async (coachId, permKey) => {
    setSyncing(`${coachId}_${permKey}`);
    const coach = coaches.find(c => c.id === coachId);
    if (!coach) return;
    
    const currentPerms = { ...DEFAULT_PERMS, ...(coach.perms || {}) };
    const newPerms = { ...currentPerms, [permKey]: !currentPerms[permKey] };
    
    setCoaches(prev => prev.map(c => c.id === coachId ? { ...c, perms: newPerms } : c));
    
    if (API_URL) {
      try {
        await fetch(`${API_URL}/api/coaches`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...coach, perms: newPerms })
        });
      } catch (e) {
        console.error("Save failed:", e);
      }
    }
    setSyncing(null);
  };

  if (sel) {
    const c = coaches.find(x => x.id === sel);
    if (!c) { 
      setTimeout(() => setSel(null), 0);
      return <div style={{ padding: 40, textAlign: "center", color: t.textDim }}>جاري تحميل بيانات المدرب...</div>;
    }
    const g = groups.find(x => x.id === c.groupId);
    const cPays = payments.filter(p => p.coachId === c.id);
    const rev = cPays.reduce((a, p) => a + p.amount, 0);
    const cPlayers = players.filter(p => p.groupId === c.groupId);
    const perms = c.perms || { ...DEFAULT_PERMS };

    return (
      <div>
        <button onClick={() => setSel(null)} style={{ background: t.bg2, border: `1px solid ${t.border}`, color: t.textDim, borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", marginBottom: 18, fontFamily: "'Cairo',sans-serif" }}>← رجوع</button>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Card t={t} style={{ padding: 24 }}>
              <div style={{ textAlign: "center", marginBottom: 18 }}>
                <Avatar name={c.name} size={64} color="#7C49A8"/>
                <div style={{ fontWeight: 800, fontSize: 16, marginTop: 12, marginBottom: 6, color: t.text }}>{c.name}</div>
                <Chip text={c.specialty} color="#7C49A8"/>
              </div>
              {[["الهاتف", c.phone], ["الإيميل", c.email], ["كلمة المرور", c.password || "—"], ["الشهادة", c.cert], ["الخبرة", `${c.exp} سنة`], ["المجموعة", g?.name || "—"], ["الراتب", fmtMoney(c.salary)]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: `1px solid ${t.border}`, fontSize: 12 }}>
                  <span style={{ color: t.textDim }}>{k}</span>
                  <span style={{ fontWeight: 600, color: k === "كلمة المرور" ? "#D8A435" : k === "الإيميل" ? "#06B6D4" : t.text, fontFamily: k === "كلمة المرور" ? "monospace" : undefined }}>{v}</span>
                </div>
              ))}
              <Btn style={{ width: "100%", marginTop: 14 }} onClick={() => { setForm({ ...c }); setModal("edit"); }}>
                <AnimIcon type="edit" size={14} color="#fff" /> تعديل البيانات
              </Btn>
            </Card>

            {/* Permissions Panel */}
            <Card t={t} style={{ padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <AnimIcon type="permissions" size={16} color="#D8A435"/>
                <div style={{ fontWeight: 700, fontSize: 13, color: "#D8A435" }}>الصلاحيات</div>
              </div>
              {PERM_LABELS.map(({ key, label, icon }) => {
                const enabled = perms[key] !== false;
                return (
                  <div key={key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 0", borderBottom: `1px solid ${t.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <AnimIcon type={icon} size={15} color={enabled ? "#10B981" : t.textFaint}/>
                      <span style={{ fontSize: 12, fontWeight: 600, color: enabled ? t.text : t.textDim }}>{label}</span>
                    </div>
                    {/* Toggle */}
                    <button onClick={() => togglePerm(c.id, key)}
                      disabled={syncing === `${c.id}_${key}`}
                      style={{ 
                        width: 42, height: 22, borderRadius: 11, border: "none", 
                        cursor: syncing ? "not-allowed" : "pointer", 
                        transition: "all .25s", 
                        background: enabled ? "#10B981" : t.border, 
                        position: "relative", flexShrink: 0,
                        opacity: syncing === `${c.id}_${key}` ? 0.6 : 1
                      }}>
                      <div style={{ position: "absolute", top: 3, right: enabled ? 3 : 21, width: 16, height: 16, borderRadius: "50%", background: "#fff", transition: "right .25s", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }}/>
                      {syncing === `${c.id}_${key}` && <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}><div style={{ width: 10, height: 10, border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin .8s linear infinite" }} /></div>}
                    </button>
                  </div>
                );
              })}
              <div style={{ marginTop: 12, fontSize: 11, color: t.textFaint, lineHeight: 1.6 }}>
                الصلاحيات المُلغاة تُزال فوراً من بوابة المدرب
              </div>
            </Card>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              <StatCard label="اللاعبون"    counter={cPlayers.length} icon="⚽" color="#06B6D4" t={t}/>
              <StatCard label="المدفوعات"  counter={cPays.length}    icon="💳" color="#7C49A8" t={t}/>
              <StatCard label="الإيرادات"  counter={rev}             icon="💰" color="#10B981" value={fmtMoney(rev)} t={t}/>
            </div>
            <Card t={t} style={{ padding: 22 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: t.text, marginBottom: 14 }}>💰 سجل المدفوعات المستلمة</div>
              {cPays.map(p => {
                const pt = PAY_TYPES[p.type];
                return (
                  <div key={p.id} className={t.name === "dark" ? "rh" : "rhl"} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 4px", borderBottom: `1px solid ${t.border}`, transition: "background .15s" }}>
                    <div style={{ display: "flex", gap: 9, alignItems: "center" }}><span style={{ fontSize: 17 }}>{pt.icon}</span><div><div style={{ fontSize: 12, fontWeight: 600, color: t.text }}>{p.playerName}</div><div style={{ fontSize: 10, color: t.textDim }}>{pt.label} · {p.month}</div></div></div>
                    <div style={{ textAlign: "left" }}><div style={{ fontSize: 13, fontWeight: 800, color: pt.color }}>{fmtMoney(p.amount)}</div><div style={{ fontSize: 10, color: t.textDim }}>{p.date}</div></div>
                  </div>
                );
              })}
              {cPays.length === 0 && <div style={{ padding: 30, textAlign: "center", color: t.textFaint }}>لا يوجد سجل مدفوعات</div>}
            </Card>
          </div>
        </div>
        {modal && (
          <Modal title="تعديل بيانات المدرب" onClose={() => setModal(null)} wide t={t}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0 14px" }}>
              {[["الاسم", "name"], ["الهاتف", "phone"], ["الإيميل", "email"], ["كلمة المرور", "password"], ["التخصص", "specialty"], ["الشهادة", "cert"]].map(([l, f]) => (
                <div key={f} style={{ flex: "1 1 calc(50% - 7px)" }}><Input label={l} value={form[f] || ""} onChange={v => setForm(x => ({ ...x, [f]: v }))} t={t}/></div>
              ))}
              <div style={{ flex: "1 1 calc(50% - 7px)" }}><Input label="الخبرة (سنوات)" value={form.exp} onChange={v => setForm(x => ({ ...x, exp: +v }))} type="number" t={t}/></div>
              <div style={{ flex: "1 1 calc(50% - 7px)" }}><Input label="الراتب" value={form.salary} onChange={v => setForm(x => ({ ...x, salary: +v }))} type="number" t={t}/></div>
              <div style={{ flex: "1 1 100%" }}><Input label="المجموعة" value={form.groupId} onChange={v => setForm(x => ({ ...x, groupId: v }))} options={[{ v: "", l: "بدون مجموعة" }, ...groups.map(g => ({ v: g.id, l: g.name }))]} t={t}/></div>
            </div>
            <div style={{ display: "flex", gap: 10 }}><Btn onClick={save} style={{ flex: 1 }}>💾 حفظ</Btn><Btn variant="secondary" onClick={() => setModal(null)}>إلغاء</Btn></div>
          </Modal>
        )}
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Btn onClick={() => { setForm(empty); setModal("add"); }}>
          <AnimIcon type="plus" size={14} color="#fff" /> إضافة مدرب
        </Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
        {coaches.map(c => {
          const g   = groups.find(x => x.id === c.groupId);
          const rev = payments.filter(p => p.coachId === c.id).reduce((a, p) => a + p.amount, 0);
          const perms = c.perms || { ...DEFAULT_PERMS };
          const enabledCount = Object.values(perms).filter(Boolean).length;
          return (
            <Card key={c.id} hover t={t} style={{ padding: 22, cursor: "pointer" }} onClick={() => setSel(c.id)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <Avatar name={c.name} size={46} color="#7C49A8"/>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: t.text }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: t.textDim }}>{c.specialty} · {c.cert}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                {[["المجموعة", g?.name || "—", "#06B6D4"], ["الراتب", fmtMoney(c.salary), "#D8A435"], ["الخبرة", `${c.exp} سنة`, "#7C49A8"]].map(([l, v, col]) => (
                  <div key={l} style={{ background: t.bg, borderRadius: 8, padding: "8px 10px" }}>
                    <div style={{ fontSize: 10, color: t.textDim }}>{l}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: col }}>{v}</div>
                  </div>
                ))}
              </div>
              {/* Permissions summary */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 10px", borderRadius: 8, background: enabledCount === 4 ? "rgba(16,185,129,.08)" : "rgba(239,68,68,.06)", border: `1px solid ${enabledCount === 4 ? "rgba(16,185,129,.2)" : "rgba(239,68,68,.15)"}` }}>
                <AnimIcon type="permissions" size={13} color={enabledCount === 4 ? "#10B981" : "#F59E0B"}/>
                <span style={{ fontSize: 11, fontWeight: 600, color: enabledCount === 4 ? "#10B981" : "#F59E0B" }}>{enabledCount === 4 ? "جميع الصلاحيات مفعّلة" : `${enabledCount}/4 صلاحيات مفعّلة`}</span>
              </div>
            </Card>
          );
        })}
      </div>
      {modal === "add" && (
        <Modal title="إضافة مدرب جديد" onClose={() => setModal(null)} wide t={t}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0 14px" }}>
            {[["الاسم", "name"], ["الهاتف", "phone"], ["التخصص", "specialty"], ["الشهادة", "cert"]].map(([l, f]) => (
              <div key={f} style={{ flex: "1 1 calc(50% - 7px)" }}><Input label={l} value={form[f] || ""} onChange={v => setForm(x => ({ ...x, [f]: v }))} t={t}/></div>
            ))}
            <div style={{ flex: "1 1 calc(50% - 7px)" }}><Input label="الخبرة (سنوات)" value={form.exp} onChange={v => setForm(x => ({ ...x, exp: +v }))} type="number" t={t}/></div>
            <div style={{ flex: "1 1 calc(50% - 7px)" }}><Input label="الراتب" value={form.salary} onChange={v => setForm(x => ({ ...x, salary: +v }))} type="number" t={t}/></div>
            <div style={{ flex: "1 1 100%" }}><Input label="المجموعة" value={form.groupId} onChange={v => setForm(x => ({ ...x, groupId: v }))} options={[{ v: "", l: "بدون مجموعة" }, ...groups.map(g => ({ v: g.id, l: g.name }))]} t={t}/></div>
          </div>
          <Btn onClick={save} style={{ width: "100%", marginTop: 10 }}>💾 إضافة المدرب</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Admin Payments ─────────────────────────────────── */
function AdminPayments({ payments, setPayments, players, coaches, groups, t }) {
  const [modal, setModal] = useState(false);
  const [form, setForm]   = useState({ playerId: players[0]?.id || "", type: "subscription", month: "أبريل 2026", amount: 350, note: "" });

  const save = () => {
    const p = players.find(x => x.id === form.playerId);
    const g = groups.find(x => x.id === p?.groupId);
    const c = coaches.find(x => x.id === g?.coachId);
    
    const newPayments = [{
      ...form,
      id: `pay${Date.now()}`,
      playerName: p?.name || "لاعب مجهول",
      coachId: c?.id || "",
      coachName: c?.name || "إدارة النادي",
      date: new Date().toISOString().split("T")[0]
    }];
    
    setPayments(ps => [...newPayments, ...ps]);
    setModal(false);
  };

  const totals = Object.keys(PAY_TYPES).map(type => ({
    ...PAY_TYPES[type],
    total: payments.filter(p => p.type === type).reduce((a, b) => a + b.amount, 0)
  }));

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, marginBottom: 24 }}>
        {totals.map(tr => (
          <Card key={tr.label} t={t} style={{ padding: 18, borderRight: `4px solid ${tr.color}` }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{tr.icon}</div>
            <div style={{ fontSize: 11, color: t.textDim, fontWeight: 600 }}>{tr.label}</div>
            <div style={{ fontSize: 18, fontWeight: 900, color: tr.color, marginTop: 4 }}>{fmtMoney(tr.total)}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Btn onClick={() => setModal(true)}>
          <AnimIcon type="plus" size={14} color="#fff" /> تسجيل دفعة جديدة
        </Btn>
      </div>
      <div style={{ background: t.bg2, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
          <thead>
            <tr style={{ background: t.bg3, borderBottom: `1px solid ${t.border}` }}>
              {["التاريخ", "اللاعب", "النوع", "الفترة", "المبلغ", "المستلم"].map(h => <th key={h} style={{ padding: "16px 20px", fontSize: 12, color: t.textDim }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {payments.map(p => {
              const pt = PAY_TYPES[p.type] || { label: p.type, color: t.textDim, icon: "💰" };
              return (
                <tr key={p.id} className={t.name === "dark" ? "rh" : "rhl"} style={{ borderBottom: `1px solid ${t.border}` }}>
                  <td style={{ padding: "14px 20px", fontSize: 12, color: t.textDim }}>{p.date}</td>
                  <td style={{ padding: "14px 20px", fontSize: 13, fontWeight: 700, color: t.text }}>{p.playerName}</td>
                  <td style={{ padding: "14px 20px" }}><div style={{ display: "flex", alignItems: "center", gap: 6, color: pt.color, fontSize: 12, fontWeight: 700 }}><span>{pt.icon}</span> {pt.label}</div></td>
                  <td style={{ padding: "14px 20px", fontSize: 12, color: t.textMid }}>{p.month}</td>
                  <td style={{ padding: "14px 20px", fontSize: 14, fontWeight: 800, color: pt.color }}>{fmtMoney(p.amount)}</td>
                  <td style={{ padding: "14px 20px", fontSize: 11, color: t.textDim }}>{p.coachName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {modal && (
        <Modal title="تسجيل عملية دفع" onClose={() => setModal(false)} t={t}>
          <Input label="اللاعب" value={form.playerId} onChange={v => setForm({ ...form, playerId: v })} options={players.map(p => ({ v: p.id, l: p.name }))} t={t}/>
          <Input label="نوع الدفع" value={form.type} onChange={v => setForm({ ...form, type: v })} options={Object.keys(PAY_TYPES).map(k => ({ v: k, l: PAY_TYPES[k].label }))} t={t}/>
          <Input label="المبلغ (ر.س)" value={form.amount} onChange={v => setForm({ ...form, amount: +v })} type="number" t={t}/>
          <Input label="الشهر / الفترة" value={form.month} onChange={v => setForm({ ...form, month: v })} t={t}/>
          <Btn onClick={save} style={{ width: "100%", marginTop: 10 }}>✅ تأكيد العملية</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Admin Trainings ────────────────────────────────── */
function AdminTrainings({ trainings, setTrainings, groups, coaches, t }) {
  const [modal, setModal] = useState(false);
  const empty = { groupId: groups[0]?.id || "", coachId: groups[0]?.coachId || "", days: [], time: "4:00 م", duration: 90, field: "ملعب A", title: "", trainingFocus: "", note: "" };
  const [form, setForm] = useState(empty);
  const DAYS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

  const save = () => {
    if (!form.groupId || !form.coachId) {
      alert("يرجى اختيار المجموعة والمدرب أولاً");
      return;
    }
    setTrainings(ts => [...ts, { ...form, id: `tr${Date.now()}` }]);
    setModal(false);
  };

  const handleGroupChange = (gid) => {
    const group = groups.find(g => g.id === gid);
    setForm(f => ({ ...f, groupId: gid, coachId: group?.coachId }));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Btn onClick={() => { setForm({ ...empty }); setModal(true); }}>
          <AnimIcon type="plus" size={14} color="#fff" /> إضافة حصة تدريبية
        </Btn>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 16 }}>
        {trainings.slice().reverse().map(tr => {
          const g = groups.find(x => x.id === tr.groupId);
          const c = coaches.find(x => x.id === tr.coachId);
          return (
            <Card key={tr.id} hover t={t} style={{ padding: 22, position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 45, height: 45, borderRadius: 12, background: `${g?.color || "#7C49A8"}15`, display: "grid", placeItems: "center", fontSize: 20 }}>⚽</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: t.text }}>{g?.name}</div>
                    <div style={{ fontSize: 11, color: t.textDim }}>المدرب: {c?.name}</div>
                  </div>
                </div>
                <Btn small variant="ghost" onClick={() => setTrainings(ts => ts.filter(x => x.id !== tr.id))}><AnimIcon type="trash" size={12} color="#EF4444"/> حذف</Btn>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                <div style={{ background: t.bg, borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 10, color: t.textFaint }}>الأيام</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: t.text }}>{tr.days.join(" - ") || "لم يحدد"}</div>
                </div>
                <div style={{ background: t.bg, borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 10, color: t.textFaint }}>الوقت والملعب</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: t.text }}>{tr.time} - {tr.field}</div>
                </div>
              </div>
              {tr.trainingFocus && (
                <div style={{ background: "rgba(6,182,212,.08)", border: "1px solid rgba(6,182,212,.15)", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 10, color: "#06B6D4", fontWeight: 700, marginBottom: 4 }}>تركيز التدريب</div>
                  <div style={{ fontSize: 12, color: t.textMid }}>{tr.trainingFocus}</div>
                </div>
              )}
              {tr.note && <div style={{ fontSize: 11, color: t.textFaint, fontStyle: "italic" }}>💡 {tr.note}</div>}
            </Card>
          );
        })}
      </div>
      {modal && (
        <Modal title="جدولة حصة تدريبية" onClose={() => setModal(false)} wide t={t}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 18px" }}>
            <Input label="المجموعة / الفريق" value={form.groupId} onChange={handleGroupChange} options={groups.map(g => ({ v: g.id, l: g.name }))} t={t}/>
            <Input label="المدرب" value={form.coachId} onChange={v => setForm(f => ({ ...f, coachId: v }))} options={coaches.map(c => ({ v: c.id, l: c.name }))} t={t}/>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 11, color: t.textDim, fontWeight: 600, marginBottom: 10 }}>أيام التدريب</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {DAYS.map(d => {
                const isS = form.days.includes(d);
                return (
                  <button key={d} onClick={() => setForm(f => ({ ...f, days: isS ? f.days.filter(x => x !== d) : [...f.days, d] }))}
                    style={{ background: isS ? t.purple : t.bg3, color: isS ? "#fff" : t.textDim, border: `1px solid ${isS ? t.purple : t.border2}`, borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .2s", fontFamily: "'Cairo',sans-serif" }}>
                    {d}
                  </button>
                );
              })}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Input label="التاريخ (اختياري)" value={form.date || ""} onChange={v => setForm(f => ({ ...f, date: v }))} type="date" t={t}/>
            <Input label="المدة (دقيقة)" value={form.duration} onChange={v => setForm(f => ({ ...f, duration: +v }))} type="number" t={t}/>
          </div>
          <Input label="الوقت" value={form.time} onChange={v => setForm(f => ({ ...f, time: v }))} t={t}/>
          <Input label="الملعب" value={form.field} onChange={v => setForm(f => ({ ...f, field: v }))} t={t}/>
          <Input label="تركيز التدريب (المهارة)" value={form.trainingFocus} onChange={v => setForm(f => ({ ...f, trainingFocus: v }))} placeholder="مثال: تمرير قصير" t={t}/>
          <Input label="ملاحظات" value={form.note} onChange={v => setForm(f => ({ ...f, note: v }))} placeholder="اختياري" t={t}/>
          <Btn onClick={save} style={{ width: "100%", marginTop: 10 }}>💾 حفظ الجدولة</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Admin Attendance ───────────────────────────────── */
function AdminAttendance({ players, groups, coaches, attendance, setAttendance, coachesAttendance, setCoachesAttendance, t }) {
  const [tab, setTab] = useState("players");
  const [selG, setSelG] = useState(groups[0]?.id || "");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [records, setRecords] = useState({});

  const gPlayers = players.filter(p => p.groupId === selG);
  
  const save = () => {
    const gid = groups.find(x => x.id === selG)?.id;
    const cid = groups.find(x => x.id === selG)?.coachId;
    setAttendance(a => [...a, { id: `att${Date.now()}`, date, groupId: gid, coachId: cid, records }]);
    alert("تم حفظ كشف الحضور بنجاح");
  };

  const saveCoach = () => {
    setCoachesAttendance(a => [...a, { id: `ca${Date.now()}`, date, records }]);
    alert("تم حفظ حضور المدربين");
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <Btn variant={tab === "players" ? "primary" : "ghost"} onClick={() => { setTab("players"); setRecords({}); }}>حضور اللاعبين</Btn>
        <Btn variant={tab === "coaches" ? "primary" : "ghost"} onClick={() => { setTab("coaches"); setRecords({}); }}>حضور المدربين</Btn>
      </div>

      <Card t={t} style={{ padding: 24 }}>
        <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 200 }}><Input label="التاريخ" value={date} onChange={setDate} type="date" t={t}/></div>
          {tab === "players" && <div style={{ flex: 1, minWidth: 200 }}><Input label="المجموعة" value={selG} onChange={setSelG} options={groups.map(g => ({ v: g.id, l: g.name }))} t={t}/></div>}
        </div>

        <div style={{ background: t.bg, borderRadius: 12, overflow: "hidden" }}>
          {(tab === "players" ? gPlayers : coaches).map(item => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: `1px solid ${t.border}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar name={item.name} size={34} color={t.purple}/>
                <span style={{ fontSize: 13, fontWeight: 700, color: t.textMid }}>{item.name}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {Object.keys(ATT_C).map(st => (
                  <button key={st} onClick={() => setRecords({ ...records, [item.id]: st })}
                    style={{ background: records[item.id] === st ? ATT_C[st] : t.bg3, color: records[item.id] === st ? "#fff" : t.textFaint, border: "none", borderRadius: 8, padding: "6px 14px", fontSize: 11, fontWeight: 800, cursor: "pointer", transition: "all .15s", fontFamily: "'Cairo',sans-serif" }}>{st}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Btn onClick={tab === "players" ? save : saveCoach} style={{ width: "100%", marginTop: 24 }}>💾 حفظ الكشف وإرسال تنبيهات</Btn>
      </Card>
    </div>
  );
}

/* ── Admin Messages ─────────────────────────────────── */
function AdminMessages({ messages, setMessages, players, coaches, t }) {
  const [chat, setChat] = useState(null);
  const [text, setText] = useState("");

  const contacts = [
    ...coaches.map(c => ({ id: c.id, name: c.name, sub: "مدرب", type: "coach" })),
    ...players.map(p => ({ id: p.parentId, name: `ولي أمر: ${p.name}`, sub: p.name, type: "parent" }))
  ].filter((v, i, a) => a.findIndex(t => t.id === v.id) === i);

  const send = () => {
    if (!text.trim()) return;
    const msg = { id: `m${Date.now()}`, from: "admin", fromName: "الإدارة", to: chat.id, toName: chat.name, text, date: new Date().toISOString().split("T")[0], read: true };
    setMessages(m => [...m, msg]);
    setText("");
  };

  const msgs = messages.filter(m => (m.from === "admin" && m.to === chat?.id) || (m.to === "admin" && m.from === chat?.id));

  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20, height: 600 }}>
      <Card t={t} style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: 18, borderBottom: `1px solid ${t.border}`, fontWeight: 800, color: t.text }}>الدردشات</div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {contacts.map(c => (
            <div key={c.id} onClick={() => setChat(c)} style={{ padding: "14px 18px", borderBottom: `1px solid ${t.border}`, cursor: "pointer", background: chat?.id === c.id ? `${t.purple}15` : "transparent", transition: "background .2s" }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: t.text }}>{c.name}</div>
              <div style={{ fontSize: 10, color: t.textDim }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card t={t} style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {chat ? (
          <>
            <div style={{ padding: 18, borderBottom: `1px solid ${t.border}`, fontWeight: 800, color: t.purple }}>{chat.name}</div>
            <div style={{ flex: 1, overflowY: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              {msgs.map(m => (
                <div key={m.id} style={{ alignSelf: m.from === "admin" ? "flex-start" : "flex-end", background: m.from === "admin" ? t.purple : t.bg3, color: m.from === "admin" ? "#fff" : t.text, padding: "10px 16px", borderRadius: 14, maxWidth: "80%", fontSize: 13 }}>
                  {m.text}
                  <div style={{ fontSize: 9, opacity: .7, marginTop: 4, textAlign: "left" }}>{m.date}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: 18, borderTop: `1px solid ${t.border}`, display: "flex", gap: 10 }}>
              <input value={text} onChange={e => setText(e.target.value)} placeholder="اكتب رسالتك هنا..." style={{ flex: 1, background: t.bg, border: "none", borderRadius: 10, padding: "10px 15px", color: t.text, fontSize: 13, outline: "none", fontFamily: "'Cairo',sans-serif" }} />
              <Btn onClick={send}>إرسال</Btn>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, display: "grid", placeItems: "center", color: t.textFaint }}>اختر جهة اتصال لبدء المحادثة</div>
        )}
      </Card>
    </div>
  );
}

/* ── Admin Prices ───────────────────────────────────── */
function AdminPrices({ prices, setPrices, theme, setTheme, t }) {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", animation: "fadeUp .4s ease" }}>
      <Card t={t} style={{ padding: 30, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(216,164,53,.1)", display: "grid", placeItems: "center" }}>🎨</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: t.text }}>مظهر النظام</div>
            <div style={{ fontSize: 11, color: t.textDim }}>اختر السمة التي تناسبك</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {["dark", "light"].map(th => (
            <button key={th} onClick={() => setTheme(th)}
              style={{ padding: 16, borderRadius: 14, border: theme === th ? `2px solid ${t.purple}` : `2px solid ${t.border}`, background: th === "dark" ? "#12111F" : "#fff", cursor: "pointer", transition: "all .2s", position: "relative" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{th === "dark" ? "🌙" : "☀️"}</div>
              <div style={{ fontWeight: 800, color: th === "dark" ? "#E8E3FF" : "#1A1030", fontSize: 13 }}>{th === "dark" ? "الوضع الليلي" : "الوضع المضيء"}</div>
              {theme === th && <div style={{ position: "absolute", top: 10, right: 10, width: 18, height: 18, borderRadius: "50%", background: t.purple, color: "#fff", fontSize: 10, display: "grid", placeItems: "center" }}>✓</div>}
            </button>
          ))}
        </div>
      </Card>

      <Card t={t} style={{ padding: 30 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(16,185,129,.1)", display: "grid", placeItems: "center" }}>💰</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: t.text }}>إعدادات الرسوم</div>
            <div style={{ fontSize: 11, color: t.textDim }}>تعديل مبالغ الاشتراكات والخدمات</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
          {Object.keys(prices).map(k => (
            <Input key={k} label={PAY_TYPES[k]?.label || k} value={prices[k]} onChange={v => setPrices({ ...prices, [k]: +v })} type="number" t={t}/>
          ))}
        </div>
        <Btn style={{ width: "100%", marginTop: 10 }}>💾 حفظ الإعدادات المالية</Btn>
      </Card>
    </div>
  );
}

/* ═══ COACH PORTAL ════════════════════════════════════ */
function CoachPortal({ user, onLogout, players, coaches, groups, attendance, setAttendance, evals, setEvals, messages, setMessages, payments, trainings, t, setLastUpdate }) {
  const [tab, setTab] = useState("dashboard");
  const coach = coaches.find(c => c.userId === user.id || c.id === user.id);
  
  if (!coach && coaches.length === 0) {
    return <div style={{ background: t.bg, height: "100vh", display: "grid", placeItems: "center", color: t.textDim }}>جاري التحميل...</div>;
  }
  
  let permsObj = coach?.perms || {};
  const perms = { ...DEFAULT_PERMS, ...permsObj };

  const group = groups.find(g => g.id === coach?.groupId);
  const myPlayers = players.filter(p => p.groupId === coach?.groupId);

  const tabs = [
    { id: "dashboard", label: "الرئيسية",    icon: "dashboard" },
    { id: "sessions",  label: "حصص التدريب", icon: "schedule" },
  ];

  if (perms.attendance !== false) tabs.push({ id: "attendance",label: "تحضير اللاعبين", icon: "attendance" });
  if (perms.evals !== false)      tabs.push({ id: "evals",     label: "التقييمات",   icon: "trophy" });
  if (perms.payments !== false)   tabs.push({ id: "payments",  label: "استلام مبالغ", icon: "payments" });
  if (perms.messages !== false)   tabs.push({ id: "messages",  label: "الرسائل",     icon: "messages", badge: messages.filter(m => !m.read && m.to === coach?.id).length });

  return (
    <Shell title="نادي نجد" subtitle="بوابة المدرب" color="#06B6D4" icon="dashboard" tabs={tabs} activeTab={tab} setActiveTab={setTab} onLogout={onLogout} badge={`مدرب: ${group?.name || "—"}`} user={user} t={t}>
      {tab === "dashboard"  && <CoachHome coach={coach} group={group} groups={groups} myPlayers={myPlayers} attendance={attendance} evals={evals} trainings={trainings} t={t}/>}
      {tab === "sessions"   && <CoachSessions coach={coach} group={group} groups={groups} trainings={trainings} t={t}/>}
      {tab === "attendance" && perms.attendance !== false && <CoachAttendance coachId={coach?.id} group={group} myPlayers={myPlayers} attendance={attendance} setAttendance={setAttendance} t={t} setLastUpdate={setLastUpdate}/>}
      {tab === "evals"      && perms.evals !== false      && <CoachEval coachId={coach?.id} myPlayers={myPlayers} evals={evals} setEvals={setEvals} t={t} setLastUpdate={setLastUpdate}/>}
      {tab === "payments"   && perms.payments !== false   && <CoachPayments coachId={coach?.id} coachName={coach?.name} myPlayers={myPlayers} t={t}/>}
      {tab === "messages"   && perms.messages !== false   && <CoachMessages coachId={coach?.id} messages={messages} setMessages={setMessages} players={players} t={t}/>}
    </Shell>
  );
}

/* ── Coach Home ─────────────────────────────────────── */
function CoachHome({ coach, group, groups, myPlayers, attendance, evals, trainings, t }) {
  if (!coach) return null;
  const lastAtt = attendance.filter(a => a.coachId === coach.id).slice(-1)[0];
  const avgScore = myPlayers.length ? Math.round(myPlayers.reduce((a, p) => a + p.score, 0) / myPlayers.length) : 0;
  const myTrainings = trainings.filter(tr => tr.groupId === coach.groupId);
  
  // Find the closest training session
  const dayMap = { "الأحد": 0, "الاثنين": 1, "الثلاثاء": 2, "الأربعاء": 3, "الخميس": 4, "الجمعة": 5, "السبت": 6 };
  const now = new Date();
  const today = now.getDay(); // 0 is Sunday in JS, matches our map
  
  const nextTr = myTrainings.slice().sort((a, b) => {
    const dayA = dayMap[a.days[0]] ?? 9;
    const dayB = dayMap[b.days[0]] ?? 9;
    let diffA = dayA - today; if (diffA < 0) diffA += 7;
    let diffB = dayB - today; if (diffB < 0) diffB += 7;
    return diffA - diffB;
  })[0];
  
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18, marginBottom: 24 }}>
        <StatCard label="لاعبي فريقي" counter={myPlayers.length} icon="⚽" color="#06B6D4" t={t}/>
        <StatCard label="متوسط تقييم الفريق" counter={avgScore} icon="🏆" value={`${avgScore}%`} color="#10B981" t={t}/>
        <StatCard label="آخر حضور" value={lastAtt?.date || "—"} icon="📅" color="#A855F7" t={t}/>
      </div>

      <Card t={t} style={{ padding: 24, background: "linear-gradient(135deg,rgba(6,182,212,.1),transparent)", border: "1px solid rgba(6,182,212,.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#06B6D4", marginBottom: 6 }}>الحصة التدريبية القادمة</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#06B6D4", marginBottom: 4 }}>{nextTr?.days.join(" و ") || "—"} الساعة {nextTr?.time || "—"}</div>
            <div style={{ fontSize: 12, color: t.textDim }}>الموقع: {nextTr?.field || "غير محدد"} · المدة: {nextTr?.duration || 90} دقيقة</div>
          </div>
          <NajdLogo size={60} />
        </div>
        {nextTr?.trainingFocus && (
          <div style={{ background: "rgba(6,182,212,.1)", borderRadius: 12, padding: "12px 16px", marginTop: 18, border: "1px solid rgba(6,182,212,.1)" }}>
            <div style={{ fontSize: 10, color: "#06B6D4", fontWeight: 800, marginBottom: 4, textTransform: "uppercase" }}>التركيز الفني</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#06B6D4" }}>{nextTr.trainingFocus}</div>
          </div>
        )}
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 24 }}>
        <Card t={t} style={{ padding: 22 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: t.text, marginBottom: 14 }}>📈 حالة الحضور والغياب للمجموعة</div>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ATT_TREND}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={t.border} />
                <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: t.textDim }} />
                <Tooltip content={<ArabicTooltip />} />
                <Bar name="حاضر" dataKey="حاضر" fill="#10B981" radius={[4, 4, 0, 0]} />
                <Bar name="غائب" dataKey="غائب" fill="#EF4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card t={t} style={{ padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: t.text }}>⚽ لاعبو المجموعة</div>
            <div style={{ fontSize: 10, color: t.textDim }}>{group?.name}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {myPlayers.slice(0, 5).map(p => (
              <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${t.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar name={p.name} size={28} color="#06B6D4"/>
                  <span style={{ fontSize: 12, fontWeight: 600, color: t.textMid }}>{p.name}</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 800, color: p.score > 80 ? "#10B981" : "#F59E0B" }}>{p.score}%</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ── Coach Sessions ─────────────────────────────────── */
function CoachSessions({ coach, group, groups, trainings, t }) {
  if (!coach || !group) return <div style={{ textAlign: "center", color: t.textFaint, padding: 60 }}>لا توجد مجموعة محددة</div>;
  const myTrainings = trainings.filter(tr => tr.groupId === coach.groupId);
  
  return (
    <div style={{ animation: "fadeIn .4s ease" }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontWeight: 700, fontSize: 14, color: "#06B6D4", marginBottom: 4 }}>📅 الجدول الأسبوعي لمجموعة {group.name}</div>
        <div style={{ fontSize: 11, color: t.textDim }}>جميع حصص التدريب المجدولة لفريقك</div>
      </div>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
        {myTrainings.map(tr => (
          <Card key={tr.id} t={t} style={{ padding: 20, position: "relative", overflow: "hidden" }}>
             <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: "#06B6D4" }} />
             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#06B6D4" }}>{tr.field}</div>
                <div style={{ fontSize: 11, color: t.textDim }}>{tr.duration} دقيقة</div>
             </div>
             <div style={{ fontWeight: 800, fontSize: 16, color: t.text, marginBottom: 8 }}>{tr.title || "حصة تدريبية"}</div>
             <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                {tr.days.map(d => <span key={d} style={{ background: t.bg3, padding: "3px 8px", borderRadius: 6, fontSize: 11, color: t.textMid }}>{d}</span>)}
                <span style={{ background: "rgba(216,164,53,.1)", padding: "3px 8px", borderRadius: 6, fontSize: 11, color: "#D8A435", fontWeight: 700 }}>{tr.time}</span>
             </div>
             {tr.trainingFocus && (
               <div style={{ fontSize: 12, color: t.textDim, padding: 10, background: t.bg, borderRadius: 8 }}>
                 <b>التركيز:</b> {tr.trainingFocus}
               </div>
             )}
          </Card>
        ))}
        {myTrainings.length === 0 && <div style={{ gridColumn: "1/-1", padding: 60, textAlign: "center", color: t.textFaint }}>لا يوجد حصص مجدولة حالياً</div>}
      </div>
    </div>
  );
}

/* ── Coach Attendance ───────────────────────────────── */
function CoachAttendance({ coachId, group, myPlayers, attendance, setAttendance, t, setLastUpdate }) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [records, setRecords] = useState({});

  const save = () => {
    if (Object.keys(records).length === 0) return alert("يرجى رصد الحضور أولاً");
    setAttendance(a => [...a, { id: `att${Date.now()}`, date, groupId: group?.id, coachId, records }]);
    alert("تم حفظ الحضور بنجاح");
  };

  return (
    <Card t={t} style={{ padding: 24, maxWidth: 650, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: 16, color: t.text }}>تحضير لاعبي {group?.name}</div>
          <div style={{ fontSize: 11, color: t.textDim }}>{myPlayers.length} لاعب مسجل في المجموعة</div>
        </div>
        <div style={{ width: 160 }}><Input value={date} onChange={setDate} type="date" t={t}/></div>
      </div>
      <div style={{ background: t.bg, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
        {myPlayers.map(p => (
          <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: `1px solid ${t.border}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Avatar name={p.name} size={34} color="#06B6D4"/>
              <span style={{ fontSize: 13, fontWeight: 700, color: t.textMid }}>{p.name}</span>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {Object.keys(ATT_C).map(st => (
                <button key={st} onClick={() => setRecords({ ...records, [p.id]: st })}
                  style={{ background: records[p.id] === st ? ATT_C[st] : t.bg3, color: records[p.id] === st ? "#fff" : t.textDim, border: "none", borderRadius: 8, padding: "7px 15px", fontSize: 11, fontWeight: 800, cursor: "pointer", transition: "all .2s", fontFamily: "'Cairo',sans-serif" }}>{st}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Btn onClick={save} style={{ width: "100%", height: 48 }}>💾 حفظ كشف الحضور</Btn>
    </Card>
  );
}

/* ── Coach Eval ─────────────────────────────────────── */
function CoachEval({ coachId, myPlayers, evals, setEvals, t, setLastUpdate }) {
  const [sel, setSel] = useState(null);
  const [form, setForm] = useState({ speed: 70, technique: 70, teamwork: 70, note: "" });

  const save = () => {
    const ev = { id: `ev${Date.now()}`, playerId: sel.id, coachId, date: new Date().toISOString().split("T")[0], ...form };
    setEvals(e => [...e, ev]);
    setSel(null);
    alert("تم حفظ التقييم بنجاح");
  };

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        {myPlayers.map(p => {
          const pEvals = evals.filter(e => e.playerId === p.id);
          const lastEv = pEvals[pEvals.length - 1];
          return (
            <Card key={p.id} hover t={t} style={{ padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <Avatar name={p.name} size={44} color="#10B981"/>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: t.text }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: t.textDim }}>آخر تقييم: {lastEv?.date || "—"}</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 14 }}>
                <div style={{ background: t.bg, borderRadius: 10, padding: 8, textAlign: "center" }}>
                  <div style={{ fontSize: 9, color: t.textFaint }}>المهارة</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#06B6D4" }}>{lastEv?.technique || p.technique}%</div>
                </div>
                <div style={{ background: t.bg, borderRadius: 10, padding: 8, textAlign: "center" }}>
                  <div style={{ fontSize: 9, color: t.textFaint }}>السرعة</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "#EF4444" }}>{lastEv?.speed || p.speed}%</div>
                </div>
              </div>
              <Btn small style={{ width: "100%" }} onClick={() => setSel(p)}>تقييم اللاعب</Btn>
            </Card>
          );
        })}
      </div>
      {sel && (
        <Modal title={`تقييم اللاعب: ${sel.name}`} onClose={() => setSel(null)} t={t}>
          <Input label="السرعة (0-100)" value={form.speed} onChange={v => setForm({ ...form, speed: +v })} type="number" t={t}/>
          <Input label="المهارة التقنية (0-100)" value={form.technique} onChange={v => setForm({ ...form, technique: +v })} type="number" t={t}/>
          <Input label="الروح الجماعية (0-100)" value={form.teamwork} onChange={v => setForm({ ...form, teamwork: +v })} type="number" t={t}/>
          <Input label="ملاحظات المدرب" value={form.note} onChange={v => setForm({ ...form, note: v })} placeholder="اكتب ملاحظاتك هنا..." t={t}/>
          <Btn onClick={save} style={{ width: "100%", marginTop: 10 }}>💾 حفظ التقييم</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Coach Payments ─────────────────────────────────── */
function CoachPayments({ coachId, coachName, myPlayers, t }) {
  const [sel, setSel] = useState(null);
  const [form, setForm] = useState({ type: "subscription", amount: 350, month: "أبريل 2026", note: "" });

  const save = () => {
    // In this demo, coaches just record the request, admin confirms. 
    // For simplicity, we'll use the same payments state.
    alert("تم تسجيل عملية الاستلام بنجاح");
    setSel(null);
  };

  return (
    <div>
       <div style={{ background: "rgba(216,164,53,.06)", border: "1px solid rgba(216,164,53,.1)", borderRadius: 16, padding: 18, marginBottom: 20, display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ fontSize: 24 }}>💰</div>
          <div style={{ fontSize: 12, color: "#D8A435", lineHeight: 1.5, fontWeight: 600 }}>يمكنك تسجيل المبالغ التي تستلمها نقداً من أولياء الأمور، وسيتم مراجعتها واعتمادها من قبل الإدارة فوراً.</div>
       </div>
       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
        {myPlayers.map(p => (
          <Card key={p.id} hover t={t} style={{ padding: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <Avatar name={p.name} size={40} color="#D8A435"/>
              <div style={{ fontWeight: 800, fontSize: 14, color: t.text }}>{p.name}</div>
            </div>
            <Btn variant="gold" small style={{ width: "100%" }} onClick={() => setSel(p)}>تسجيل استلام مبلغ</Btn>
          </Card>
        ))}
      </div>
      {sel && (
        <Modal title={`استلام مبلغ من: ${sel.name}`} onClose={() => setSel(null)} t={t}>
          <Input label="نوع المبلغ" value={form.type} onChange={v => setForm({ ...form, type: v })} options={Object.keys(PAY_TYPES).map(k => ({ v: k, l: PAY_TYPES[k].label }))} t={t}/>
          <Input label="المبلغ المستلم (ر.س)" value={form.amount} onChange={v => setForm({ ...form, amount: +v })} type="number" t={t}/>
          <Input label="الشهر / الفترة" value={form.month} onChange={v => setForm({ ...form, month: v })} t={t}/>
          <Input label="ملاحظات" value={form.note} onChange={v => setForm({ ...form, note: v })} t={t}/>
          <Btn variant="gold" onClick={save} style={{ width: "100%", marginTop: 10 }}>✅ تأكيد الاستلام</Btn>
        </Modal>
      )}
    </div>
  );
}

/* ── Coach Messages ─────────────────────────────────── */
function CoachMessages({ coachId, messages, setMessages, players, t }) {
  const [chat, setChat] = useState(null);
  const [text, setText] = useState("");

  const contacts = [
    { id: "admin", name: "إدارة النادي", sub: "المكتب الرئيسي" },
    ...players.filter(p => p.parentId).map(p => ({ id: p.parentId, name: `ولي أمر: ${p.name}`, sub: p.name }))
  ];

  const send = () => {
    if (!text.trim()) return;
    const msg = { id: `m${Date.now()}`, from: coachId, fromName: "المدرب", to: chat.id, toName: chat.name, text, date: new Date().toISOString().split("T")[0], read: true };
    setMessages(m => [...m, msg]);
    setText("");
  };

  const msgs = messages.filter(m => (m.from === coachId && m.to === chat?.id) || (m.to === coachId && m.from === chat?.id));

  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 18, height: 550 }}>
      <Card t={t} style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ padding: 18, borderBottom: `1px solid ${t.border}`, fontWeight: 800, color: t.text }}>الرسائل</div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {contacts.map(c => (
            <div key={c.id} onClick={() => setChat(c)} style={{ padding: "14px 18px", borderBottom: `1px solid ${t.border}`, cursor: "pointer", background: chat?.id === c.id ? "rgba(6,182,212,.1)" : "transparent" }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: t.text }}>{c.name}</div>
              <div style={{ fontSize: 10, color: t.textDim }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card t={t} style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {chat ? (
          <>
            <div style={{ padding: 18, borderBottom: `1px solid ${t.border}`, fontWeight: 800, color: "#06B6D4" }}>{chat.name}</div>
            <div style={{ flex: 1, overflowY: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {msgs.map(m => (
                <div key={m.id} style={{ alignSelf: m.from === coachId ? "flex-start" : "flex-end", background: m.from === coachId ? "#06B6D4" : t.bg3, color: m.from === coachId ? "#fff" : t.text, padding: "10px 14px", borderRadius: 12, maxWidth: "80%", fontSize: 13 }}>
                  {m.text}
                </div>
              ))}
            </div>
            <div style={{ padding: 18, borderTop: `1px solid ${t.border}`, display: "flex", gap: 10 }}>
              <input value={text} onChange={e => setText(e.target.value)} placeholder="اكتب رسالتك..." style={{ flex: 1, background: t.bg, border: "none", borderRadius: 10, padding: "10px 15px", color: t.text, fontSize: 13, outline: "none", fontFamily: "'Cairo',sans-serif" }} />
              <Btn onClick={send} style={{ background: "#06B6D4" }}>إرسال</Btn>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, display: "grid", placeItems: "center", color: t.textFaint }}>اختر محادثة للبدء</div>
        )}
      </Card>
    </div>
  );
}

/* ═══ PARENT PORTAL ═══════════════════════════════════ */
function ParentPortal({ user, onLogout, players, coaches, groups, attendance, evals, messages, setMessages, payments, trainings, t }) {
  const [tab, setTab] = useState("dashboard");
  const [selPlayer, setSelPlayer] = useState(null);

  // In ParentPortal, user.playerIds is the key
  const myPlayers = players.filter(p => (user.playerIds || []).includes(p.id));
  const child = selPlayer || myPlayers[0];
  
  if (!child) return <div style={{ background: t.bg, height: "100vh", display: "grid", placeItems: "center", color: t.textDim }}>لا توجد بيانات للاعبين مرتبطة بهذا الحساب</div>;

  const childGroup = groups.find(g => g.id === child.groupId);
  const childCoach = coaches.find(c => c.id === childGroup?.coachId);
  const childAtt   = attendance.filter(a => a.groupId === child.groupId).slice(-10);
  const childEvals = evals.filter(e => e.playerId === child.id).slice(-5);
  const childPays  = payments.filter(p => p.playerId === child.id);
  const myTrainings = (trainings || []).filter(tr => tr.groupId === childGroup?.id);

  const tabs = [
    { id: "dashboard", label: "مستوى الابن", icon: "dashboard" },
    { id: "schedule",  label: "الجدول",      icon: "schedule" },
    { id: "payments",  label: "المدفوعات",   icon: "payments" },
    { id: "messages",  label: "الرسائل",     icon: "messages", badge: messages.filter(m => !m.read && m.to === user.id).length },
  ];

  return (
    <Shell title="نادي نجد" subtitle="بوابة ولي الأمر" color="#10B981" icon="dashboard" tabs={tabs} activeTab={tab} setActiveTab={setTab} onLogout={onLogout} badge={`ولي أمر: ${child.name}`} user={user} t={t}>
      {myPlayers.length > 1 && (
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          {myPlayers.map(p => (
            <button key={p.id} onClick={() => setSelPlayer(p)} style={{ background: child.id === p.id ? "#10B981" : t.bg2, color: child.id === p.id ? "#fff" : t.textDim, border: `1px solid ${child.id === p.id ? "#10B981" : t.border}`, borderRadius: 10, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all .2s", fontFamily: "'Cairo',sans-serif" }}>
              {p.name}
            </button>
          ))}
        </div>
      )}

      {tab === "dashboard" && (
        <div style={{ animation: "fadeIn .4s ease" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18, marginBottom: 24 }}>
            <StatCard label="نسبة الحضور" counter={child.attendancePct} icon="📅" value={`${child.attendancePct}%`} color="#10B981" t={t}/>
            <StatCard label="التقييم العام" counter={child.score} icon="🏆" value={`${child.score}%`} color="#06B6D4" t={t}/>
            <StatCard label="الأهداف المسجلة" counter={child.goals} icon="⚽" color="#EF4444" t={t}/>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 20 }}>
            <Card t={t} style={{ padding: 24 }}>
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <Avatar name={child.name} size={64} color="#10B981"/>
                <div style={{ fontWeight: 800, fontSize: 17, marginTop: 14, color: t.text }}>{child.name}</div>
                <div style={{ fontSize: 12, color: t.textDim }}>فريق {childGroup?.name} · كابتن {childCoach?.name}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <SkillBar label="السرعة" val={child.speed} color="#EF4444" t={t}/>
                <SkillBar label="اللياقة" val={child.stamina} color="#F59E0B" t={t}/>
                <SkillBar label="المهارة" val={child.technique} color="#06B6D4" t={t}/>
                <SkillBar label="التعاون" val={child.teamwork} color="#10B981" t={t}/>
              </div>
            </Card>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Card t={t} style={{ padding: 24 }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: t.text, marginBottom: 18 }}>آخر تقييمات المدرب</div>
                {childEvals.length > 0 ? childEvals.map(ev => (
                  <div key={ev.id} style={{ background: t.bg, borderRadius: 14, padding: 16, marginBottom: 12, border: `1px solid ${t.border}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: t.purple }}>{ev.date}</span>
                      <span style={{ fontSize: 11, color: t.textFaint }}>المدرب: {childCoach?.name}</span>
                    </div>
                    <div style={{ fontSize: 13, color: t.textMid, lineHeight: 1.6 }}>{ev.note}</div>
                  </div>
                )) : <div style={{ padding: 30, textAlign: "center", color: t.textFaint }}>لا توجد تقييمات مسجلة بعد</div>}
              </Card>

              <Card t={t} style={{ padding: 24 }}>
                <div style={{ fontWeight: 800, fontSize: 14, color: t.text, marginBottom: 18 }}>سجل الحضور الأخير</div>
                <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 10 }}>
                  {childAtt.map(a => {
                    const st = a.records[child.id] || "غائب";
                    return (
                      <div key={a.id} style={{ flexShrink: 0, textAlign: "center", width: 70 }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: ATT_C[st], color: "#fff", display: "grid", placeItems: "center", fontSize: 16, margin: "0 auto 8px", boxShadow: `0 4px 10px ${ATT_C[st]}44` }}>{st === "حاضر" ? "✓" : "✗"}</div>
                        <div style={{ fontSize: 10, color: t.textDim, whiteSpace: "nowrap" }}>{a.date.split("-").slice(1).join("/") || "—"}</div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      {tab === "schedule" && (
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
            {myTrainings.map(tr => (
              <Card key={tr.id} t={t} style={{ padding: 24, borderTop: `5px solid ${childGroup?.color || "#10B981"}` }}>
                <div style={{ fontSize: 22, marginBottom: 12 }}>⚽</div>
                <div style={{ fontWeight: 800, fontSize: 18, color: t.text, marginBottom: 6 }}>{tr.title || "حصة تدريبية"}</div>
                <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
                  <Chip text={tr.days.join(" و ")} color="#10B981"/>
                  <Chip text={tr.time} color="#D8A435"/>
                </div>
                <div style={{ fontSize: 12, color: t.textDim, marginBottom: 14 }}><b>المكان:</b> {tr.field}</div>
                {tr.note && <div style={{ background: t.bg, padding: 12, borderRadius: 10, fontSize: 11, color: t.textMid, lineHeight: 1.5 }}>💡 {tr.note}</div>}
              </Card>
            ))}
          </div>
        </div>
      )}

      {tab === "payments" && (
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Card t={t} style={{ padding: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: t.text, marginBottom: 20 }}>سجل المدفوعات</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {childPays.map(p => {
                const pt = PAY_TYPES[p.type] || { label: p.type, color: t.textDim, icon: "💰" };
                return (
                  <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: t.bg, borderRadius: 14, border: `1px solid ${t.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${pt.color}15`, display: "grid", placeItems: "center", fontSize: 18 }}>{pt.icon}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: t.text }}>{pt.label}</div>
                        <div style={{ fontSize: 10, color: t.textDim }}>{p.date} · {p.month}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 900, color: pt.color }}>{fmtMoney(p.amount)}</div>
                  </div>
                );
              })}
              {childPays.length === 0 && <div style={{ padding: 40, textAlign: "center", color: t.textFaint }}>لا توجد سجلات مدفوعات</div>}
            </div>
          </Card>
        </div>
      )}

      {tab === "messages" && <CoachMessages coachId={user.id} messages={messages} setMessages={setMessages} players={[{ id: "admin", name: "إدارة النادي", parentId: "admin" }]} t={t} />}
    </Shell>
  );
}
