import ProfileForm from "@/components/forms/profile-form";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import ProfilePicture from "./_components/profile-picture";

async function Settings() {
  const authUser = await currentUser();
  if (!authUser) return null;
  const user = await db.user.findUnique({
    where: { clerkId: authUser.id },
  });
  const uploadProfileImage = async (image: string) => {
    "use server";
    const response = await db.user.update({
      where: { clerkId: authUser.id },
      data: { profileImage: image },
    });
    return response;
  };
  const removeProfileImage = async () => {
    "use server";
    const response = await db.user.update({
      where: { clerkId: authUser.id },
      data: { profileImage: "" },
    });
    return response;
  };
  return (
    <div className="flex flex-col gap-4  ">
      <div className="sticky top-0 z-[10] rounded-bl-2xl  flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </div>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        {/* <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        /> */}
        {/* <ProfilePicture
          onDelete={removeProfileImage} <ProfilePicture
          onDelete={removeProfileImage}
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} />
          userImage={user?.profileImage || ""}
          onUpload={uploadProfileImage}
        />
        <ProfileForm user={user} onUpdate={updateUserInfo} /> */}
        <ProfileForm user={user} />
      </div>
    </div>
  );
}
export default Settings;