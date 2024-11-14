package br.hirehub.hh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class HomeControllerGraficos {

    @GetMapping
    public ModelAndView index(){
        var mv = new ModelAndView("home/index");
        return mv;
    }

}