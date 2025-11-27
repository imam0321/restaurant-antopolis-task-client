"use client";

import Image from "next/image";
import { useState } from "react";
import { useActionState } from "react";
import { createDish } from "@/services";
import { ICategory } from "@/types";

interface AddFoodFormProps {
  onClose: () => void;
  categories: ICategory[];
}

export function AddFoodForm({ onClose, categories }: AddFoodFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState(createDish, null);

  const handleFileChange = (file: File | null) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files?.[0] ?? null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileChange(e.dataTransfer.files?.[0] ?? null);
  };

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
          Add Food
        </h2>

        <form action={formAction} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            disabled={isPending}
            className="w-full px-6 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
            required
          />
          <select
            name="category_id"
            disabled={isPending}
            className="w-full px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50 appearance-none"
            required
          >
            <option value="">Select Category</option>
            {categories &&
              categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
          </select>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="relative w-full px-6 py-3 rounded-full bg-red-100 border-2 border-dashed border-red-300 text-center cursor-pointer hover:bg-red-200 transition-colors overflow-hidden"
          >
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isPending}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {imagePreview ? (
              <div className="flex items-center justify-center gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-red-400 text-sm">Image Selected</span>
              </div>
            ) : (
              <span className="text-red-400 text-sm">
                Upload or Drag Image here
              </span>
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
