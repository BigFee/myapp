/**
 * Created by asusu on 2017/6/22.
 */
import React,{Component} from 'react';
import './Staggerer.css';
import Mil from '../Milestones';
class Sta extends Component{
    render(){
        return(
            <div className="age">
                <div className="age_firm">
                    <div className="age_connect">首页>关于我们>公司大事记</div>
                    <div className="age_character">公司大事记</div>
                </div>
                <div className="age_joint">2010’s</div>
                <Mil id="公司通过换股吸收方式整合天方药业股份有限公司，通过发行股份方式购买湖北科益药业股份有限公司等企业，
同时整体托管通用技术集团医药控股有限公司；整合重组完成后，公司医药工业、医药商业实力大大增强，医药
工业、医药商业、国际贸易三大板块三足鼎立、协同发展的产业格局基本形成。" age="2013"/>
                <Mil id="公司全年营业收入突破百亿元大关，利润总额突破5亿元，双双迈上历史新台阶。" age="2012"/>
                <Mil id="公司通过投资并购方式控股新疆天山制药工业有限公司，标志着公司进军现代中药产业领域迈出了坚实步伐，进
一步完善了公司科工贸一体化产业布局。" age="2011"/>
                <Mil id="公司以增资扩股方式整合原广州大光医药有限公司，与原广东美康万特医药有限公司组成新的广东美康大光万特
医药有限公司，新组建的公司经营范围更广、经营资质更加齐全，广东美康大光万特医药有限公司已发展成为广
东省医药流通行业龙头企业。" age="2010"/>
                <div className="age_joint">2000’s</div>
                <Mil id="公司收购美康九州医药有限公司100%股权，高起点进入医药商业，并建立起以北京、广东为重点，覆盖全国32个
省市自治区的市场营销网络；同年，剥离非主营资产—北京中技引玉科技有限公司。" age="2009"/>
                <Mil id="公司全年营业收入突破百亿元大关，利润总额突破5亿元，双双迈上历史新台阶。" age="2008"/>
                <Mil id="公司通过投资并购方式控股新疆天山制药工业有限公司，标志着公司进军现代中药产业领域迈出了坚实步伐，进
一步完善了公司科工贸一体化产业布局。" age="2007"/>
                <Mil id="公司以增资扩股方式整合原广州大光医药有限公司，与原广东美康万特医药有限公司组成新的广东美康大光万特
医药有限公司，新组建的公司经营范围更广、经营资质更加齐全，广东美康大光万特医药有限公司已发展成为广
东省医药流通行业龙头企业。" age="2005"/>
                <Mil id="公司改制为有限责任公司，更名为中国医药保健品有限公司。" age="2004"/>
                <div className="age_joint">1990’s</div>
                <Mil id="公司加入中国通用技术集团，成为其发展医药健康产业的核心企业。" age="1999"/>
                <div className="age_joint">1990’s</div>
                <Mil id="总公司与地方分公司脱钩，全面开展医药和医疗产品的自营和代理进出口业务。" age="1998"/>
                <Mil id="中国医药保健品进出口总公司在北京成立，统管全国医药保健品外经贸行业，并相继在全国各省市成立了40多家
分公司，在美国、日本、香港等国家和地区设立了10余家海外企业。" age="1984"/>

            </div>
        )
    }
}
export default Sta;