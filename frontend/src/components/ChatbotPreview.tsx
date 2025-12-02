import React from "react";
import { Link } from "react-router-dom";

export default function ChatbotPreview() {
  return (
    <div className="mt-6 bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-green-100 grid place-items-center">🤖</div>
        <div>
          <div className="font-semibold">Farm Helper</div>
          <div className="text-xs text-slate-500">Quick answers for pests, dosage & crop tips</div>
        </div>
      </div>

      <div className="mt-3 text-sm text-slate-600">
        Try: <span className="font-medium">“How much urea for 1 acre of wheat?”</span>
      </div>

      <div className="mt-4">
        <Link to="/chatbot" className="text-sm text-green-600 font-medium">Open full chat →</Link>
      </div>
    </div>
  );
}
