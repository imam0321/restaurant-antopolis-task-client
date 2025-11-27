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
    <div className="fixed inset-0 z-50 bg-black/10 flex justify-center items-center p-2">
      <div className="relative w-[250px] mx-auto bg-[#999999] backdrop-blur-sm rounded-lg shadow-lg p-4 border-l border-r border-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 font-bold"
          disabled={isPending}
        >
          ✕
        </button>

        <h2 className="text-lg text-center text-white mb-4">Add Category</h2>

        <form action={formAction} className="space-y-2">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              disabled={isPending}
              className="w-full px-6 py-1 rounded-full border border-linear-to-r from-[#FFFFFF] to-[#7C7B7B] opacity-80  text-white focus:outline-none"
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
            className="w-full py-1 rounded-full bg-[#D3332F] text-white  disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
