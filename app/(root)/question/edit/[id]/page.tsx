import Question from "@/components/forms/Question";
import React from "react";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { getQuestionById } from "@/lib/actions/question.action";
import { ParamsProps } from "@/types";

const EditQuestionPage = async ({ params }: ParamsProps) => {
  const { userId } = auth();

  if (!userId) return null;
  const mongoUser = await getUserById({ userId });

  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div>
        <Question
          type="Edit"
          mongoUserId={mongoUser._id}
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  );
};

export default EditQuestionPage;
