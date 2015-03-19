package info.brok.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/")
public class MainController {
	@RequestMapping(value="index", method = RequestMethod.GET)
	public String Index() { return "main/index"; }
}