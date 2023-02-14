import React, { useState, useEffect } from "react";
import { Loader, ImageCard, FormField } from "../components";
import { getRandomPrompt } from "../utils";
import { generateImage } from "../utils/API";
const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {};

  const handleSurpriseMe = () => {};

  return (
    <section className="max-w-7xl" mx-auto>
      <div className="text-center">
        <h2 className="font-extrabold text-[#253031] text-[32px]">Create</h2>
        <p className="mt-2 text-[#279af1] text-[16px]">
          Create stunning images with the DALL-E AI and share them with the
          community
        </p>
      </div>
      <div className="flex flex-col justify-around align-center px-8 py-8 sm:flex-row">
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            <FormField
              LabelName=""
              type="text"
              name="prompt"
              placeholder="what should we create"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />
          </div>
          <div className="flex justify-center align-center gap-5">
            <div className="mt-5 flex gap-5">
              <button
                type="button"
                onClick={() => generateImage(form.prompt)}
                className="font-semibold text-xs bg-[#49beaa] text-white py-2.5 px-5 rounded-[5px] w-full sm:w-auto text-center"
              >
                {generatingImg ? "Generating" : "Generate"}
              </button>
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="font-semibold text-xs bg-[#279af1] text-white py-2.5 px-5 rounded-[5px] w-full sm:w-auto text-center"
              >
                Save Image
              </button>
            </div>
          </div>
        </form>
        <div className="relative bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#4392f1]-500 focus:border-[#4392f1]-500 w-64 p-3 h-64 flex justify-center items=center">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src="/preview.png"
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"
            />
          )}
          {generatingImg && (
            <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Profile;
