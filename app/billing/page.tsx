"use client";
import React from "react";

export default function BillingPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header -------------------------------------------------- */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <h1 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            Billing
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your billing account and track your spending.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 h-10 px-4 text-sm font-bold text-primary border border-primary/50 rounded-lg hover:bg-primary/5 transition-colors">
          <span className="material-symbols-outlined">download</span>
          <span>Export Billing Data</span>
        </button>
      </div>

      {/* Grid principal -------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* IZQUIERDA: Cost Breakdown + Recent Invoices */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* COST BREAKDOWN -------------------------------------------------- */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900/50">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold">
                  Cost Breakdown
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  This month to date: Aug 1 - 24, 2024
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 cursor-pointer">
                <span>View Report</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </div>
            </div>

            <div className="mt-6 h-72 w-full bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">[Area Chart for Cost Trend]</p>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Vertex AI</p>
                <p className="text-gray-900 text-xl font-bold">$1,250.75</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">BigQuery</p>
                <p className="text-gray-900 text-xl font-bold">$873.40</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Cloud Storage</p>
                <p className="text-gray-900 text-xl font-bold">$412.90</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Others</p>
                <p className="text-gray-900 text-xl font-bold">$115.62</p>
              </div>
            </div>
          </div>

          {/* INVOICES -------------------------------------------------- */}
<div className="rounded-xl border border-gray-200 p-6 bg-white">
  <h2 className="text-gray-900 text-lg font-bold mb-4">Recent Invoices</h2>

  <table className="w-full text-left">
    <thead>
      <tr className="border-b border-gray-200">
        <th className="py-2 px-4 text-sm font-medium text-gray-600">Date</th>
        <th className="py-2 px-4 text-sm font-medium text-gray-600">Invoice ID</th>
        <th className="py-2 px-4 text-sm font-medium text-gray-600">Amount</th>
        <th className="py-2 px-4 text-sm font-medium text-gray-600">Status</th>
        <th className="py-2 px-4 text-sm font-medium text-gray-600 text-right">Action</th>
      </tr>
    </thead>

    <tbody>
      {[
        ["Aug 1, 2024", "INV-2024-008", "$2,431.15"],
        ["Jul 1, 2024", "INV-2024-007", "$2,189.50"],
        ["Jun 1, 2024", "INV-2024-006", "$2,510.22"],
      ].map(([date, id, amount], i) => (
        <tr key={i} className="border-b border-gray-200">
          <td className="py-3 px-4 text-sm text-gray-800">{date}</td>
          <td className="py-3 px-4 text-sm text-gray-800">{id}</td>
          <td className="py-3 px-4 text-sm text-gray-800">{amount}</td>
          <td className="py-3 px-4 text-sm">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-medium bg-green-100 text-green-700">
              Paid
            </span>
          </td>
          <td className="py-3 px-4 text-sm text-primary font-medium text-right">
            <a href="#">Download</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </div>

        {/* DERECHA: Budgets & Alerts + Payment Method */}
        <div className="flex flex-col gap-6">

          {/* BUDGETS -------------------------------------------------- */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white">
            <div className="flex justify-between mb-4">
              <h2 className="text-gray-900 text-lg font-bold">Budgets & Alerts</h2>
              <button className="text-primary text-sm font-bold">Manage</button>
            </div>

            <div className="flex flex-col gap-6">

              {/* Monthly budget */}
              <div>
                <div className="flex justify-between text-sm">
                  <p className="font-medium">Monthly Project Budget</p>
                  <p className="text-gray-500">
                    <span className="font-bold text-gray-900">$2,652</span> of $5,000
                  </p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "53%" }} />
                </div>

                <p className="text-gray-500 text-sm mt-1">You've used 53% of your budget.</p>
              </div>

              {/* Vertex AI */}
              <div>
                <div className="flex justify-between text-sm">
                  <p className="font-medium">Vertex AI Services</p>
                  <p className="text-gray-500">
                    <span className="font-bold text-gray-900">$1,250</span> of $1,500
                  </p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "83%" }} />
                </div>

                <p className="text-orange-600 text-sm mt-1">Alert: 83% of budget used.</p>
              </div>

              {/* Staging */}
              <div>
                <div className="flex justify-between text-sm">
                  <p className="font-medium">Staging Environment</p>
                  <p className="text-gray-500">
                    <span className="font-bold text-gray-900">$89</span> of $300
                  </p>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }} />
                </div>

                <p className="text-gray-500 text-sm mt-1">30% of budget used.</p>
              </div>

            </div>
          </div>

          {/* PAYMENT METHOD -------------------------------------------------- */}
          <div className="rounded-xl border border-gray-200 p-6 bg-white">
            <h2 className="text-gray-900 text-lg font-bold mb-4">Payment Method</h2>

            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <div className="w-12 h-8 bg-gray-300 rounded-md flex items-center justify-center">
                <span className="material-symbols-outlined text-gray-500"></span>
              </div>

              <div>
                <p className="font-medium">Visa •••• 4598</p>
                <p className="text-gray-500 text-sm">Expires 12/2026</p>
              </div>

              <button className="ml-auto text-primary text-sm font-bold">Update</button>
            </div>

            <a className="mt-4 flex items-center justify-center gap-2 h-10 px-4 text-sm font-bold text-primary hover:bg-primary/5 rounded-lg w-full" href="#">
              <span className="material-symbols-outlined">add</span>
              <span>Add Payment Method</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
