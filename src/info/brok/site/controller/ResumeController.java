package info.brok.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/resume/")
public class ResumeController {
	@RequestMapping(value="", method = RequestMethod.GET)
	public String Index() { return "resume/index"; }
	
	@RequestMapping(value="work_experience", method = RequestMethod.GET)
	public void WorkExperience() { }
	
	@RequestMapping(value="coworkers", method = RequestMethod.GET)
	public void Coworkers() { }
	
	@RequestMapping(value="education", method = RequestMethod.GET)
	public void Education() { }
}