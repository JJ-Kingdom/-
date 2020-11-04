<template lang="pug">
	.home
		.rgbaBox
			.topNav
				el-breadcrumb(separator-class="el-icon-arrow-right")
					el-breadcrumb-item 首页
					el-breadcrumb-item(:to="{path:'/journalism'}") 新闻资讯
					el-breadcrumb-item(:to="{path:'/user'}") 煊赫集团参加2019中国国际进口博览会
			.titleBox 煊赫集团参加2019中国国际进口博览会
			.mainTitle 2019年4月16日
			.scrollBox
				.imageBox
				.contentTextBox
					.textOne 公司以“专注，用心，服务”为核心价值通过专业水平和不懈努力，提供优质的服务。公司一直秉承以用户需求为核心，提供周到的服务，赢得了消费者的信赖和好评。
					.textThree 我们专业细致的服务售后服务体系，公司主营业务乳胶系列赢得了众多消费者的青睐。我们相信，通过我们的不断努力和追求，一定能够实现互利共赢。而且我们非常重视培养人才，实行任人唯贤的人力资源政策，积极培养有理想、有道德、有责任感、有协作精神的现代化员工队伍，同时积极引进先进的管理理念，采用规范化、科学化的管理方法不断壮大自身实力。我们始终坚持人才与企业共同发展的理念，关注员工的技能培训及发展，并不断加强企业文化的营建。
					.textFive 用心打交道，全心全意服务客户，公司业务得了持续高速发展，也为员工提供了极大的发展空间。多元化的企业文化、以人为本的经营管理理念证明了我们是一个良好的发展平台。
			.footerBox
				.last(@click="onClick") ↑&nbsp;&nbsp;上一篇：无
				.next(@click="onClick") ↓&nbsp;&nbsp;&nbsp;下一篇：坚持人才与企业共同发展的理念
</template>

<script>

export default {
	methods:{
		onClick(){
			window.location.reload()
		}
	}
}
</script>
<style lang="sass">
	.home
		width: 90vw
		height: 100vh
		margin: 0 auto
		.rgbaBox
			width: 78%
			height: 100%
			background-size: 100% 100%
			margin: 0 auto
			.topNav
				font-size: 0.16rem
				padding-top: 10%
				padding-left: .2%
				.el-breadcrumb__inner.is-link
					color: #e2cc9d
				.el-breadcrumb__inner
					color: #fefefe
			.titleBox
				color: #fff
				font-size: .6rem
				width: 100%
				text-align: center
				margin-top: 3%
			.mainTitle
				width: 100%
				text-align: center
				color: #E3E3E3
				font-size: .4rem
				margin: 2% 0
			.scrollBox
				width: 90%
				height: 6rem
				margin: 0 auto
				overflow: scroll
				&::-webkit-scrollbar
					display: none
				.imageBox
					width: 100%
					height: 4.3rem
					background: url('~@/assets/image/detail_1.png') no-repeat
					background-size: 100% 100%
				.contentTextBox
					width: 100%
					height: 3rem
					margin-top: 1%
					font-size: 0.2rem
					div
						width: 100%
						border-bottom: 1px dashed #5D5959
						padding-top: 0.1rem
						color: #F9F9F9
					.textOne,.textThree,.textFour,.textFive
						text-indent: 2em
					.textOne,.textThree,.textFive
						width: 100%
						line-height: .4rem
			.footerBox
				margin-top: 1rem
				display: flex
				justify-content: space-around
				div
					font-size: 0.16rem
					font-family: MicrosoftYaHei
				.last
					
</style>