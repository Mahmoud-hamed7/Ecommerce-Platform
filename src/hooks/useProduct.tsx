import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


export default function useProduct() {
 function getRecentProduct() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }

  const resProduct = useQuery({
    queryKey: ["RecentProduct"],
    queryFn: getRecentProduct,
    // staleTime: 5000,  // الوقت الي بيكون بعده  الفيتش قديم 
    // retry:4, // لو الكود مظهرش ده بيحدد يعمله ريتراي كام مره 
    // refetchInterval:4000  // كل اربع ثواني بيعمل ريفيتش 
    // refetchIntervalInBackground:false  // لما تخرج من الصفحة بيفضل يعمل ريفيتش
    // refetchOnWindowFocus:'always' // لما بخش الصفحة بيعمل ري فيتش 
    // gcTime:4000  // carbage collecter
    select:(data)=> data.data.data // دي بتخلي اخد الي انا عاوزه بس يعني مثلا لو عاوز اعمل فلتر وارجع كاتجيوري معين ممكنه اعمله من عندها  علطول 
  });
 
 
  return resProduct
}
