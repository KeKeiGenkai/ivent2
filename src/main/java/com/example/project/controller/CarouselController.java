package com.example.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class CarouselController {

    @GetMapping("/")
    public String getCarouselPage(Model model) {
        // Массив ссылок на изображения
        List<String> imageLinks = Arrays.asList(
                "/images/Danka.png",
                "/images/Di.png",
                "/images/Dimedroll.png"
                "/images/Danka.png", // Ссылка на первое изображение
                "/images/Di.png", // Ссылка на второе изображение
                "/images/Dimedroll.png",
                "/images/Liza.png",
                "/images/Pensioner.png",
                "/images/Polina.png",
                "/images/smoj.png",
                "/images/Stasik.png",
                "/images/Varya.png",
        //"/images/.png",
        // Ссылка на третье изображение
        // "image4.jpg", // Вы можете временно закомментировать строки, чтобы исключить изображения
        );
        // Передаём ссылки в шаблон
        model.addAttribute("images", imageLinks);
        return "carousel"; // Имя HTML-файла
    }
}
    @PostMapping("/submit")
    public String handleFormSubmit(@RequestParam String name, Model model) {
        model.addAttribute("userName", name);
        return "result"; // Покажем другую страницу или вернём пользователя
    }
