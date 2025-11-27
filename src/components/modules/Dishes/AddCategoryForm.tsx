"use client";

import { useActionState, useEffect } from "react";
import { createCategory } from "@/services";

interface IAddCategoryFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCategoryForm({
  onClose,
  onSuccess,
}: IAddCategoryFormProps) {
  const [state, formAction, isPending] = useActionState(createCategory, null);

  useEffect(() => {
    if (state && state?.success) {
      onSuccess();
      onClose();
    }
  }, [state, onSuccess, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
          disabled={isPending}
        >
          ✕
        </button>

        <h2 className="text-2xl font-light text-center text-gray-400 mb-8">
          Add Category
        </h2>

        <form action={formAction} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              disabled={isPending}
              className="w-full px-6 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              required
            />

            {state?.errors?.categoryName?.[0] && (
              <p className="text-red-500 text-xs mt-1 ml-4">
                {state.errors.categoryName[0]}
              </p>
            )}
          </div>

          {state?.message && (
            <p
              className={`text-center text-sm ${
                state.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full py-3 rounded-full bg-[#D3332F] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
