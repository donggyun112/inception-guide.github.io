import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import './style.css';
cytoscape.use(coseBilkent);
import './favicon.ico';
// favicon build
import '../model/data.json';

fetch('./model/data.json', { mode: 'no-cors' })
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
		function setDimStyle(target_cy, style) {
			target_cy.nodes().forEach(function (target) {
				target.style(style);
			});
			target_cy.edges().forEach(function (target) {
				target.style(style);
			});
		}
		
		function setFocus(target_element, successorColor, predecessorsColor, edgeWidth, arrowScale) {
			target_element.style('background-color', nodeActiveColor);
			target_element.style('color', nodeColor);
			target_element.successors().each(function (e) {
				// 상위  엣지와 노드
				if (e.isEdge()) {
					e.style('width', edgeWidth);
					e.style('arrow-scale', arrowScale);
				}
				e.style('color', nodeColor);
				e.style('background-color', successorColor);
				e.style('line-color', successorColor);
				e.style('source-arrow-color', successorColor);
				setOpacityElement(e, 0.5);
			}
			);
			target_element.predecessors().each(function (e) {
				// 하위 엣지와 노드
				if (e.isEdge()) {
					e.style('width', edgeWidth);
					e.style('arrow-scale', arrowScale);
				}
				e.style('color', nodeColor);
				e.style('background-color', predecessorsColor);
				e.style('line-color', predecessorsColor);
				e.style('source-arrow-color', predecessorsColor);
				setOpacityElement(e, 0.5);
			});
			target_element.neighborhood().each(function (e) {
				// 이웃한 엣지와 노드
				setOpacityElement(e, 1);
			}
			);
			target_element.style('width', Math.max(parseFloat(target_element.style('width')), nodeActiveSize));
			target_element.style('height', Math.max(parseFloat(target_element.style('height')), nodeActiveSize));
			target_element.style('font-size', Math.max(parseFloat(target_element.style('font-size')), fontActiveSize));
		}
		
		function setOpacityElement(target_element, degree) {
			target_element.style('opacity', degree);
		}
		
		function setResetFocus(target_cy) {
			target_cy.nodes().forEach(function (target) {
				target.style('background-color', nodeColor);
				var rank = pageRank.rank(target);
				target.style('width', nodeMaxSize * rank + nodeMinSize);
				target.style('height', nodeMaxSize * rank + nodeMinSize);
				target.style('font-size', fontMaxSize * rank + fontMinSize);
				target.style('color', nodeColor);
				target.style('opacity', 1);
			});
			target_cy.edges().forEach(function (target) {
				target.style('line-color', edgeColor);
				target.style('source-arrow-color', edgeColor);
				target.style('width', edgeWidth);
				target.style('arrow-scale', arrowScale);
				target.style('opacity', 1);
			});
		}
		
		
		// const data = [ 
			
		// ];
		
		
		const cy_for_rank = cytoscape({
			elements: data
		});
		// rank를 활용하기 위해 data만 입력한 cytoscape 객체입니다
		
		const pageRank = cy_for_rank.elements().pageRank();
		// elements들의 rank들입니다.
		
		/// 변경된 부분
		const nodeMaxSize = 400;
		const nodeMinSize = 5;
		const nodeActiveSize = 28;
		const fontMaxSize = 8;
		const fontMinSize = 5;
		const fontActiveSize = 7;
		// node & font 크기 값
		
		const edgeWidth = '2px';
		var edgeActiveWidth = '4px';
		const arrowScale = 0.8;
		const arrowActiveScale = 1.2;
		// edge & arrow 크기값
		
		const dimColor = '#dfe4ea';
		const edgeColor = '#ced6e0';
		const nodeColor = '#57606f';
		const nodeActiveColor = '#ffa502';
		
		const successorColor = '#ff6348';
		// 상위 node & edge color
		const predecessorsColor = '#1e90ff';
		const cy = cytoscape({
			autoungrabify: true,
			minZoom: 0.7,  // 최소 축소 크기 (배율)
			maxZoom: 12,     // 최대 확대 크기 (배율)
			container: document.getElementById('cy'), // container to render in
		
			elements: data,
		
			style: [ // the stylesheet for the graph
				{
					selector: 'node',
					style: {
					  // 변경된 부분
						'background-color': nodeColor,
					  //
						'label': 'data(label)',
						'width': function (ele) {
							return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
						},
						'height': function (ele) {
							return nodeMaxSize * pageRank.rank('#' + ele.id()) + nodeMinSize;
						},
						'font-size': function (ele) {
							return fontMaxSize * pageRank.rank('#' + ele.id()) + fontMinSize;
						},
					  // 추가된 부분
						'color': nodeColor
					  //
					}
				},
		
				{
					selector: 'edge',
					style: {
					  // 변경된 부분
						'width': edgeWidth,
						'curve-style': 'bezier',
						'line-color': edgeColor,
						'source-arrow-color': edgeColor,
						'source-arrow-shape': 'vee',
						'arrow-scale': arrowScale
					  //
					}
				}
			],
		
			layout: {
				name: 'cose-bilkent',
				animate: false,
				gravityRangeCompound: 1.5,
				fit: true,
				tile: true
			}
		});

		cy.on('tap', 'node', function(e) {
			const localPath = e.target.data('localPath');
			if (localPath && localPath !== '') {
			  window.location.href = localPath;
			}
		  });
		
		cy.on('tap', 'node', function(e) {
			const url = e.target.data('url');
			if (url && url !== '') {
				window.open(url);
			}
		});
		
		
		cy.on('tapstart mouseover', 'node', function(e){
			console.log("in");
		});
		
		
		cy.on('tapend mouseout', 'node', function(e){
			console.log("out");
		});
		
		cy.on('tapstart mouseover', 'node', function (e) {
			setDimStyle(cy, {
				'background-color': dimColor,
				'line-color': dimColor,
				'source-arrow-color': dimColor,
				'color': dimColor
			});
		
			setFocus(e.target, successorColor, predecessorsColor, edgeActiveWidth, arrowActiveScale);
		});
		
		cy.on('tapend mouseout', 'node', function (e) {
			setResetFocus(e.cy);
		});
		
		
		// 추가되는 부분                                              
		let resizeTimer;
		
		window.addEventListener('resize', function () {
			this.clearTimeout(resizeTimer);
			resizeTimer = this.setTimeout(function(){
				cy.fit();
			},200);
		});
	});

// webpack으로 묶어줘야 하니 css파일을 진입점인 index.js 에 import 합니다


//