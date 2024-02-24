import puppeteer from "puppeteer";
import { CriptoYa } from "./types";

export const scrapeMercadoPago = async() => {
    const MP_URL = "https://www.mercadopago.com.ar/cuenta";
    const browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: true });
    const page = await browser.newPage();
    await page.goto(MP_URL);

    const scrapeText = await page.evaluate(() => {
        const text = document.querySelector(".basics .cards div:first-child p")?.innerHTML;
        return text;
    });
    await browser.close();

    const result = scrapeText?.replace(/\D+\.?\D+/g, "") ?? "";
    const parseResult = result?.replace(",", ".");
    const textToNumber = parseFloat(parseResult);
	return textToNumber;
}

export const scrapeBuenBit = async() => {
	const BB_URL = "https://buenbit.com/";
	const browser = await puppeteer.launch({ args: ["--no-sandbox"], headless: true });
	const page = await browser.newPage();
	await page.goto(BB_URL);

	const scrapeText = await page.evaluate(() => {
		const text = document.querySelector("#buendolar > div > div:nth-child(1) > div > div.relative.z-10.p-6.sm\\:p-10.md\\:p-14 > p")?.innerHTML;
		return text;
	});
    await browser.close();

	const result = scrapeText?.replace(/\D+\.?\D+/g, "") ?? "";
	const parseResult = result?.replace(",", ".");
	const textToNumber = parseFloat(parseResult);
	return textToNumber;
}

export const getBuenBitPrice = async() : Promise<CriptoYa> => {
    const BB_URL = "https://criptoya.com/api/buenbit/usdt/ars";
    const response = await fetch(BB_URL);
    const data = await response.json();
    return data
}