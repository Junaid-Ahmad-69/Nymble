import {Course} from "@/model/course-model";
import {Category} from "@/model/category-model";
import {User} from "@/model/user-modal";
import {Testimonial} from "@/model/testimonial-model";
import {Module} from "@/model/module-model";

export async function getCourses(){
   return  await Course.find({}).populate({
      path: "category",
      model: Category,
   }).populate({
      path: "instructor",
      model: User,
   })
       .populate({
          path: "testimonials",
          model: Testimonial,
       })
       .populate({
           path: "modules",
           model: Module,
       })
}
