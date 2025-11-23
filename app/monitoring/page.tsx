"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function MonitoringPage() {
  const router = useRouter();

  const alerts = [
    {
      level: "critical",
      title: "High memory usage on 'prod-db-1'",
      detail: "Policy: 'Memory Utilization > 90%' triggered",
    },
    {
      level: "error",
      title: "Cloud Function 'user-auth' has high error rate",
      detail: "Policy: 'Error Rate > 5%' triggered",
    },
    {
      level: "warning",
      title: "Disk space is running low on 'backup-server'",
      detail: "Policy: 'Disk Usage > 85%' triggered",
    },
  ];

  const logs = [
    "INFO: [2023-10-27T10:00:00Z] user-service: User 'alex@example.com' logged in successfully.",
    "INFO: [2023-10-27T10:00:05Z] api-gateway: Request received: GET /v1/data",
    "WARN: [2023-10-27T10:01:10Z] database-proxy: Connection pool nearing capacity (85% used).",
    "ERROR: [2023-10-27T10:02:15Z] payment-service: Failed to process transaction 12345: Card declined.",
    "INFO: [2023-10-27T10:03:00Z] user-service: User 'jane@example.com' updated profile.",
  ];

  const navItems = [
    { name: "Dashboard", icon: "📊", route: "/" },
    { name: "BigQuery", icon: "💾", route: "/bigquery" },
    { name: "Vertex AI", icon: "🤖", route: "/vertex-ai" },
    { name: "Monitoring", icon: "🔔", route: "/monitoring" },
    { name: "Billing", icon: "💳", route: "/billing" },
    { name: "AI Search (B2C)", icon: "🔍", route: "/ai-search" },
    { name: "Workspace Auditoría", icon: "📄", route: "/workspace-auditoria" },
  ];

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.topHeader}>
        <div style={styles.headerLeft}>
          <div style={styles.headerBrand}>
            <div style={styles.headerAvatar}>G</div>
            <div>
              <div style={{ fontWeight: 600, color: "#111827" }}>GCP Project Name</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>project-id-12345</div>
            </div>
          </div>
          <div style={styles.googleCloud}>
            <span style={{ fontSize: 20, color: "#1a73e8" }}>●</span>
            <span style={{ fontWeight: 500, marginLeft: 8, color: "#111827" }}>Google Cloud</span>
          </div>
          <input
            type="text"
            placeholder="Search"
            style={styles.searchInput}
          />
        </div>
        <div style={styles.headerRight}>
          <span style={styles.iconBtn}>🔔</span>
          <span style={styles.iconBtn}>⋮⋮⋮</span>
          <div style={styles.userAvatar}>U</div>
        </div>
      </header>

      <div style={styles.mainLayout}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <nav style={styles.nav}>
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleNavigation(item.route)}
                style={
                  item.name === "Monitoring"
                    ? { ...styles.navItem, ...styles.navItemActive }
                    : styles.navItem
                }
              >
                <span style={{ marginRight: 10, fontSize: 16 }}>{item.icon}</span>
                {item.name}
              </div>
            ))}
          </nav>

          <div style={{ marginTop: "auto" }}>
            <button style={styles.createBtn}>+ Create Resource</button>
            <div 
              style={{ marginTop: 12, fontSize: 14, color: "#6b7280", cursor: "pointer", display: "flex", alignItems: "center", padding: "8px 12px" }}
            >
              <span style={{ marginRight: 10 }}>⚙️</span> Settings
            </div>
            <div 
              style={{ marginTop: 6, fontSize: 14, color: "#6b7280", cursor: "pointer", display: "flex", alignItems: "center", padding: "8px 12px" }}
            >
              <span style={{ marginRight: 10 }}>❓</span> Help
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main style={styles.content}>
          <div style={styles.contentHeader}>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, color: "#111827" }}>Monitoring Overview</h1>
            <div style={styles.headerActions}>
              <select style={styles.select}>
                <option>Last 1 hour</option>
                <option>Last 24 hours</option>
                <option>Last 7 days</option>
              </select>
              <button style={styles.primaryBtn}>+ Create Dashboard</button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div style={styles.cardsRow}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>CPU Utilization</div>
              <div style={styles.metricLarge}>12%</div>
              <div style={styles.progressBar}>
                <div style={{ ...styles.progress, width: "12%" }} />
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Active Incidents</div>
              <div style={styles.metricLargeRed}>3</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>2 Critical, 1 Warning</div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Latency (p95)</div>
              <div style={styles.metricLarge}>120ms</div>
              <div style={{ fontSize: 13, color: "#059669", fontWeight: 600 }}>↓ 2%</div>
            </div>

            <div style={styles.card}>
              <div style={styles.cardTitle}>Error Rate</div>
              <div style={styles.metricLarge}>0.05%</div>
              <div style={{ fontSize: 13, color: "#6b7280" }}>Stable</div>
            </div>
          </div>

          {/* Performance & Alerts */}
          <div style={styles.grid}>
            <div style={styles.panel}>
              <div style={styles.panelHeader}>
                <div style={{ fontWeight: 600, fontSize: 16, color: "#111827" }}>Performance Metrics</div>
                <div style={styles.legend}>
                  <span style={styles.legendDotPurple} /> 
                  <span style={{ color: "#374151" }}>VM Instance 1</span>
                  <span style={{ marginLeft: 12 }} />
                  <span style={styles.legendDotBlue} /> 
                  <span style={{ color: "#374151" }}>VM Instance 2</span>
                </div>
              </div>
              <div style={styles.chartPlaceholder}>Chart Placeholder</div>
            </div>

            <div style={styles.panel}>
              <div style={{ fontWeight: 600, marginBottom: 16, fontSize: 16, color: "#111827" }}>Alerts</div>
              {alerts.map((a, i) => (
                <div key={i} style={styles.alertItem}>
                  <div
                    style={{
                      ...styles.alertDot,
                      background:
                        a.level === "critical"
                          ? "#dc2626"
                          : a.level === "error"
                          ? "#ea580c"
                          : "#f59e0b",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#111827" }}>{a.title}</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                      {a.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Log Explorer */}
          <div style={styles.panel}>
            <div style={styles.logHeader}>
              <div style={{ fontWeight: 600, fontSize: 16, color: "#111827" }}>Log Explorer</div>
              <button style={styles.ghostBtn}>View in Logs Explorer ↗</button>
            </div>

            <pre style={styles.logBox}>
              {logs.map((l, i) => (
                <div key={i}>
                  <span
                    style={{
                      color: l.startsWith("ERROR")
                        ? "#ef4444"
                        : l.startsWith("WARN")
                        ? "#f59e0b"
                        : "#3b82f6",
                      fontWeight: 700,
                    }}
                  >
                    {l.split(":")[0]}:
                  </span>
                  <span style={{ color: "#d1d5db" }}>
                    {l.substring(l.indexOf(":") + 1)}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        </main>
      </div>
    </div>
  );
}

const styles: { [k: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    background: "#f9fafb",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  },
  topHeader: {
    height: 60,
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    flex: 1,
  },
  headerBrand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  headerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    background: "#dbeafe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "#1e40af",
  },
  googleCloud: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
  },
  searchInput: {
    padding: "6px 12px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    width: 300,
    fontSize: 14,
    color: "#111827",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  iconBtn: {
    fontSize: 18,
    cursor: "pointer",
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#fbbf24",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "#fff",
  },
  mainLayout: {
    display: "flex",
    minHeight: "calc(100vh - 60px)",
  },
  sidebar: {
    width: 240,
    background: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    padding: 16,
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  navItem: {
    padding: "10px 12px",
    borderRadius: 8,
    color: "#4b5563",
    cursor: "pointer",
    fontSize: 14,
    transition: "background 0.2s",
    fontWeight: 500,
    display: "flex",
    alignItems: "center",
  },
  navItemActive: {
    background: "#dbeafe",
    color: "#1e40af",
    fontWeight: 600,
  },
  createBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "10px 12px",
    border: "none",
    borderRadius: 8,
    width: "100%",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  contentHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerActions: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  select: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "#fff",
    fontSize: 14,
    color: "#374151",
    cursor: "pointer",
  },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
  },
  cardsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #f3f4f6",
  },
  cardTitle: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 8,
    fontWeight: 500,
  },
  metricLarge: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 8,
    color: "#111827",
  },
  metricLargeRed: {
    fontSize: 28,
    fontWeight: 700,
    color: "#dc2626",
    marginBottom: 8,
  },
  progressBar: {
    height: 6,
    background: "#e5e7eb",
    borderRadius: 6,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    background: "#2563eb",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 350px",
    gap: 16,
  },
  panel: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    border: "1px solid #f3f4f6",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  legend: {
    fontSize: 13,
    display: "flex",
    alignItems: "center",
  },
  legendDotPurple: {
    width: 10,
    height: 10,
    background: "#8b5cf6",
    borderRadius: 999,
    display: "inline-block",
    marginRight: 6,
  },
  legendDotBlue: {
    width: 10,
    height: 10,
    background: "#2563eb",
    borderRadius: 999,
    display: "inline-block",
    marginRight: 6,
  },
  chartPlaceholder: {
    height: 200,
    borderRadius: 8,
    background: "#f9fafb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
    fontSize: 14,
    border: "1px solid #e5e7eb",
  },
  alertItem: {
    display: "flex",
    gap: 12,
    marginBottom: 16,
  },
  alertDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 4,
    flexShrink: 0,
  },
  logHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  ghostBtn: {
    border: "1px solid #d1d5db",
    background: "#fff",
    padding: "6px 12px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13,
    color: "#374151",
    fontWeight: 500,
  },
  logBox: {
    background: "#1f2937",
    color: "#d1d5db",
    padding: 16,
    borderRadius: 8,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace",
    fontSize: 13,
    lineHeight: 1.6,
    whiteSpace: "pre-wrap",
    margin: 0,
  },
};