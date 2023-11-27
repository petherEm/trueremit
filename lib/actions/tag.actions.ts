"use server";

import { GetTopInteractedTagsParams } from "./shared.types";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if (!user) throw new Error("User not found");

    // find interactions for the user and group by tags
    // Interation

    return ["tag1", "tag2", "tag3"];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
