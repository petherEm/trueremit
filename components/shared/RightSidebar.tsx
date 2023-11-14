import React from "react";
import Link from "next/link";
import Image from "next/image";

import RenderTag from "@/components/shared/RenderTag";

const hotQuestions = [
  { _id: "1", title: "How do I get started with RemitRate?", views: 100 },
  { _id: "2", title: "What's the current USD/EUR", views: 100 },
  {
    _id: "3",
    title: "What are the best providers sending to China?",
    views: 100,
  },
  { _id: "4", title: "How to transfer the larger amount?", views: 100 },
  { _id: "5", title: "What is your preffered offline provider?", views: 100 },
];

const popularTags = [
  { _id: "1", name: "USD", totalQuestions: 5 },
  { _id: "2", name: "Western Union", totalQuestions: 5 },
  { _id: "3", name: "Sending to China", totalQuestions: 5 },
  { _id: "4", name: "Hidden fees", totalQuestions: 5 },
  { _id: "5", name: "Future of payments", totalQuestions: 5 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
