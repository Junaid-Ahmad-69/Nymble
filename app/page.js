import {getCourses} from "@/queries/course";
import {dbConnect} from "@/service/mongo";

export default async function Home() {
    const _dbConnect = await dbConnect();
    console.log(_dbConnect);
    // const handleToast = (mode)=>{
    //     mode ? toast.success("success") : toast.error("error")
    // }
    const courses = await getCourses()
    // const categories = await getCategoriesByID(courses[0].category)
    console.log("courses==========================>", courses)
  return (
   <>wewe</>
  );
}
