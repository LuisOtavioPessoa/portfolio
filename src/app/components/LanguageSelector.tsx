"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSelector(){
    const {language, setLanguage} = useLanguage();

    return(
        <div className="relative inline-block mt-2">
            <select 
                id="linguagem"
                value={language}
                onChange={(e) => setLanguage(e.target.value as "pt" | "en")}
                className="appearance-none min-w-[180px] bg-transparent text-white font-chocolates text-[16px] px-2 py-0.5 rounded-[10px] cursor-pointer outline-none border-2 border-white focus:ring-offset-transparent"
            >
            <option className="bg-primary-1 text-white" value="pt">🇧🇷 PT-BR</option>
            <option className="bg-primary-1 text-white" value="en">🇺🇸 EN-US</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
                <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox = "0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
            </div>
        </div>
    );
}
