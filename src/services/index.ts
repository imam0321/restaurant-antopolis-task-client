"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

export const getAllDishes = async (queryString?: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/dishes${queryString ? `?${queryString}` : ""}`, {
      cache: "no-cache"
    });
    return await res.json();
  } catch (error: any) {
    return error.message
  }
}
 
export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      cache: "no-cache"
    });
    return await res.json();
  } catch (error: any) {
    return error.message
  }
}

export const createDish = async (_prevState: any, formData: FormData) => {
  try {
    const payload = {
      name: formData.get("name") as string,
      category_id: formData.get("category_id") as string,
    }
    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(payload));

    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/dishes`, {
      method: "POST",
      body: newFormData,
    });

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};

export const createCategory = async (_prevState: any, formData: FormData) => {
  try {
    const name = formData.get("name") as string

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    if (!res.ok) {
      const errData = await res.json();
      return { success: false, message: errData.message || "Failed to create category" };
    }

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};


export const getAllFeedbacks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/common/feedbacks`, {
      cache: "force-cache"
    });
    return await res.json();
  } catch (error: any) {
    return error.message
  }
}
export const getAllMembers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/common/members`, {
      cache: "force-cache"
    });
    return await res.json();
  } catch (error: any) {
    return error.message
  }
}

