/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

export const getAllDishes = async (queryString?: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/dishes${queryString ? `?${queryString}` : ""}`);
    return await res.json();
  } catch (error: any) {
    return error.message
  }
}
 
export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`);
    return await res.json();
  } catch (error: any) {
    return error.message
  }
}

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

