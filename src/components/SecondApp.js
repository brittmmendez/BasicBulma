import React, { Component } from 'react';
import blog1 from '../static/blog-1.png';
import blog2 from '../static/blog-2.png';
import blog3 from '../static/blog-3.png';
// import "../debug.css"; 
import "../App.css"; 
import { Link } from "react-router-dom";

class SecondApp extends Component {
  render() {
    return (
     <div>
			<section className="section is-paddingless-horizontal">
				<div className="container grid">
					<nav className="breadcrumb grid-xl" aria-label="breadcrumbs">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li className="is-active"><Link to="second-app" aria-current="page">How to build a beautiful blog</Link></li>
						</ul>
					</nav>
				</div>
			</section>

			<section className="section is-paddingless-horizontal paddingZero">
				<div className="container grid">
					<article className="media center">
						<figure className="media-left">
							<figure className="image is-64x64">
								<img src="https://bulma.io/images/placeholders/128x128.png" />
							</figure>
						</figure>
						<div className="media-content">
							<div className="content">
								<p>
									<strong>Brittany Morris</strong> <a>@username_morris</a><br/>
									<span className="has-text-grey">Self-taught, inspired to learn<br/>
									<time datetime="2018-09-10">Sept 10</time> · 20 min read</span>
								</p>
							</div>
						</div>
					</article>

					<div className="section is-paddingless-horizontal">
						<h1 className="title is-2">
							How to build a beautiful blog
						</h1>
						<h2 className="subtitle is-3 has-text-grey-light">
							Learn from first-principles
						</h2>
					</div>

					<figure className="columns is-mobile is-variable is-0 is-marginless grid-xl">
						<div className="column">
							<div className="image card">
								<Link to="#"> <img src={blog1}/> </Link>
							</div>
						</div>
						<div className="column">
							<div className="image card">
							<Link to="#"> <img src={blog2}/> </Link>
							</div>
						</div>
						<div className="column">
							<div className="image card">
							<Link to="#"> <img src={blog3}/> </Link>
							</div>
						</div>
					</figure>

					<figcaption className="level">
						<small className="level-item has-text-grey">
							The blog we'll build. Click to continue on Scrimba
							</small>
					</figcaption>

					<div className="content is-medium">
						<p>
							If you’re like me, you’re interested in the web and its overwhelming reach, but you’re also inundated with the mess of information that is learning HTML and CSS.
							The thing is, these languages are unlike other domains, like Word Processors and Programming Languages.
							<strong>The web is another world</strong>, and it’s not the prettiest thing around.
						</p>
						<p>
							Having learned me some web, I’m here to give a gentle push of encouragement, because, <strong>with a little guidance</strong>, these domains can be a lot easier than you imagine.
							Continue reading, and we’ll build a beautiful blog from scratch.
							We’ll also learn some CSS Grid, Flexbox, and Responsive Design.
						</p>
					</div>
		
					{/* <div class="content">
						<h1>Hello World</h1>
						<p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
						<h2>Second level</h2>
						<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
						<ul>
							<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
							<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
							<li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
							<li>Ut non enim metus.</li>
						</ul>
						<h3>Third level</h3>
						<p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
						<ol>
							<li>Donec blandit a lorem id convallis.</li>
							<li>Cras gravida arcu at diam gravida gravida.</li>
							<li>Integer in volutpat libero.</li>
							<li>Donec a diam tellus.</li>
							<li>Aenean nec tortor orci.</li>
							<li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
							<li>Vivamus maximus ultricies pulvinar.</li>
						</ol>
						<blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
						<p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
						<p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
						<dl>
							<dt>Web</dt>
							<dd>The part of the Internet that contains websites and web pages</dd>
							<dt>HTML</dt>
							<dd>A markup language for creating web pages</dd>
							<dt>CSS</dt>
							<dd>A technology to make HTML look better</dd>
						</dl>
						<p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
						<h4>Fourth level</h4>
						<p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
						<pre>
						&lt;!DOCTYPE html&gt;<br/>
						&lt;html&gt;<br/>
						&lt;head&gt;<br/>
							&lt;title&gt;Hello World&lt;/title&gt;<br/>
						&lt;/head&gt;<br/>
						&lt;body&gt;<br/>
							&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;<br/>
						&lt;/body&gt;<br/>
						&lt;/html&gt;</pre>
						<p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
						<table>
							<thead>
							<tr>
								<th>One</th>
								<th>Two</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>Three</td>
								<td>Four</td>
							</tr>
							<tr>
								<td>Five</td>
								<td>Six</td>
							</tr>
							<tr>
								<td>Seven</td>
								<td>Eight</td>
							</tr>
							<tr>
								<td>Nine</td>
								<td>Ten</td>
							</tr>
							<tr>
								<td>Eleven</td>
								<td>Twelve</td>
							</tr>
							</tbody>
						</table>
						<p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
						<h5>Fifth level</h5>
						<p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
						<figure>
							<img src="https://bulma.io/images/placeholders/256x256.png"/>
							<img src="https://bulma.io/images/placeholders/256x256.png"/>
							<figcaption>
							Figure 1: Some beautiful placeholders
							</figcaption>
						</figure>
						<h6>Sixth level</h6>
						<p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
					</div> */}
				</div>
			</section>
    </div>
    );
  }
}

export default SecondApp;
