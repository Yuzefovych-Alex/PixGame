import { redirect } from 'next/navigation';
import "@/app/global.scss";

export default function Home() {
    redirect('/store');
    return null;
}
