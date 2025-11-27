"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { createDish } from "@/services";
import { ICategory } from "@/types";

interface AddFoodFormProps {
  onClose: () => void;
  categories: ICategory[];
  onSuccess: () => void;
}

export function AddFoodForm({
  onClose,
  categories,
  onSuccess,
}: AddFoodFormProps) {
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
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold"
          disabled={isPending}
        >
          ✕
        </button>

        <h2 className="text-lg text-center text-white mb-8">Add Food</h2>

        <form action={formAction} className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            disabled={isPending}
            className="w-full px-6 py-1 rounded-full border border-linear-to-r from-[#FFFFFF] to-[#7C7B7B] opacity-80 text-white focus:outline-none"
            required
          />
          <select
            name="category_id"
            disabled={isPending}
            className="w-full px-6 py-1 rounded-full  border border-linear-to-r from-[#FFFFFF] to-[#7C7B7B] opacity-80 text-white/50 focus:outline-none appearance-none"
            required
          >
            <option
              className="text-white/50 bg-[#999999] backdrop-blur-sm "
              value=""
            >
              Select Category
            </option>
            {categories &&
              categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat._id}
                  className="text-white/50 bg-[#999999] backdrop-blur-sm "
                >
                  {cat.name}
                </option>
              ))}
          </select>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="relative w-full h-8 px-6 py-1 rounded-full bg-red-100 border border-dashed border-red-300 text-center cursor-pointer hover:bg-red-200 transition-colors overflow-hidden"
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
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 438px, (max-width: 1024px) 538px, 750px"
                  />
                </div>
                <span className="text-red-400 text-sm">Image Selected</span>
              </div>
            ) : (
              <span className="text-red-400">Upload or Drag Image here</span>
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
            className="w-full py-1 rounded-full bg-[#D3332F] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
