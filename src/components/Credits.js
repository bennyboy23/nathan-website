import React, { Component } from 'react';

class Credits extends Component {
	render() {
		return (
			<div>
				<ul className="collapsible popout" data-collapsible="accordion">
					<li>
						<div className="collapsible-header">
							<i className="material-icons">info_outline</i><span>Professional Sound Design Credits</span>
						</div>
						<div className="white collapsible-body">
							<ul className="collection">
								<li className="collection-item">Eigengrau - Dir. Ed O'Shaughnessy Tower Theatre Company (Bridewell Theatre)</li>
								<li className="collection-item">
									Sons Of Paradise - Dir. Lily Ann Green Tower Theatre Company (Bridewell Theatre)
								</li>
								<li className="collection-item">
									Smokers at The Scene of a Crime - Rosa Crompton Micklegate Theatre Company
									(Etcetera/Hen and Chickens)
								</li>
								<li className="collection-item">
									Cocktail Hour - Laurence Cook Micklegate Theatre Company (Etcetera/Hen and Chickens)
								</li>
								<li className="collection-item">All Is True - Dir. Nick Hutchison (Vanbrugh Theatre)</li>
							</ul>
						</div>
					</li>
					<li>
						<div className="collapsible-header">
							<i className="material-icons">info_outline</i><span>Other Professional Credits</span>
						</div>
						<div className="white collapsible-body">
							<ul className="collection">
								<li className="collection-item">Rehearsal Qlab Programmer - Secret Cinema Project Rage</li>
								<li className="collection-item">Recording Engineer - Told By An Idiot</li>
								<li className="collection-item">Sound No. 1 - Dick Whittington and His Cat (Wilton's Music Hall)</li>
								<li className="collection-item">Production Sound Engineer - The One Day of The Year (Finborough Theatre)</li>
								<li className="collection-item">Sound Technician - Cold Plates Sketch Comedy (Old Red Lion Theatre)</li>
							</ul>
						</div>
					</li>
					<li>
						<div className="collapsible-header">
							<i className="material-icons">info_outline</i><span>RADA Sound Design Credits</span>
						</div>
						<div className="white collapsible-body">
							<ul className="collection">
								<li className="collection-item">Pains of Youth - Dir. Polly Findlay (GBS Theatre)</li>
								<li className="collection-item">Chez Feydeau - Dir. Geoff Bullen (Vanbrugh Theatre)</li>
								<li className="collection-item">Cymbeline - Dir. Nick Hutchison (Gielgud Theatre)</li>
								<li className="collection-item">The Bright and Bold Design - Dir. Robert Hastie (GBS Theatre)</li>
								<li className="collection-item">The Rover - Dir. Jessica Swale (Vanbrugh Theatre)</li>
								<li className="collection-item">Lindbergh's Flight - Dir. Nick Hutchison (Gielgud Theatre)</li>
								<li className="collection-item">As You Like It - Dir. Michael Fentiman (Vanbrugh Theatre)</li>
								<li className="collection-item">Our New Girl - Dir. Yael Shavit (GBS Theatre)</li>
								<li className="collection-item">Women of Twilight - Dir. Psyche Stott (GBS Theatre)</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Credits;
