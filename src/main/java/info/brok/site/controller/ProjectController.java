package info.brok.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/project/")
public class ProjectController {
	@RequestMapping(value="agilerails", method = RequestMethod.GET)
	public void AgileRails() { }
	
	@RequestMapping(value="steam_badger", method = RequestMethod.GET)
	public void SteamBadger() { }
	
	@RequestMapping(value="this_site", method = RequestMethod.GET)
	public void ThisSite() { }
}