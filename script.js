const KEY = "campusfix_reports_v1";
let reports = loadReports();
let photoData = "";
function loadReports(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return []}}
function save(){localStorage.setItem(KEY,JSON.stringify(reports));render()}
function id(){return "CF-" + Date.now().toString().slice(-6)}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function statusClass(s){return s.toLowerCase().replace(" ","-")}
function symbol(cat){return ({Electrical:"ϟ",Cleanliness:"✦",Classroom:"▣",Network:"⌁","Water / Plumbing":"滴",Safety:"!",Other:"•••"})[cat]||"•"}
function badge(s){return `<span class="status ${statusClass(s)}">${s}</span>`}
function render(){
 const count=s=>reports.filter(r=>r.status===s).length;
 document.getElementById("totalStat").textContent=reports.length;
 document.getElementById("pendingStat").textContent=count("Pending");
 document.getElementById("progressStat").textContent=count("In Progress");
 document.getElementById("resolvedStat").textContent=count("Resolved");
 document.getElementById("navCount").textContent=reports.length;
 const sorted=[...reports].sort((a,b)=>b.created-b.created);
 document.getElementById("recentList").innerHTML=sorted.slice(0,4).map(itemHTML).join("")||'<div class="empty">No reports yet. Submit your first campus issue.</div>';
 filterReports();
}
function itemHTML(r){return `<div class="report-item"><div class="issue-symbol">${symbol(r.category)}</div><div class="issue-info"><b>${escapeHTML(r.title)}</b><small>${escapeHTML(r.location)} · ${r.id}</small></div>${badge(r.status)}</div>`}
function filterReports(){
 const q=(document.getElementById("searchReports")?.value||"").toLowerCase();
 const f=document.getElementById("statusFilter")?.value||"All";
 const list=[...reports].sort((a,b)=>b.created-a.created).filter(r=>(f==="All"||r.status===f)&&(r.title.toLowerCase().includes(q)||r.location.toLowerCase().includes(q)));
 document.getElementById("allReports").innerHTML=list.map(r=>`<article class="card"><div class="report-detail"><div><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.category)} · ${escapeHTML(r.location)} · ${r.id}</p><p style="margin-top:6px">${escapeHTML(r.description)}</p></div><div>${badge(r.status)}<select aria-label="Update status for ${r.id}" data-id="${r.id}" style="display:block;margin-top:9px"><option ${r.status==="Pending"?"selected":""}>Pending</option><option ${r.status==="In Progress"?"selected":""}>In Progress</option><option ${r.status==="Resolved"?"selected":""}>Resolved</option></select></div></div></article>`).join("")||'<div class="card empty">No matching reports found.</div>';
}
function go(page){
 document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));
 document.getElementById(page+"Page").classList.remove("hidden");
 document.querySelectorAll(".side-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 document.getElementById("pageName").textContent=({dashboard:"Dashboard",report:"Report an issue",myreports:"My reports"})[page];
 if(page==="myreports")filterReports();
}
document.querySelectorAll("[data-page]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
document.querySelectorAll("[data-category]").forEach(b=>b.addEventListener("click",()=>{go("report");document.getElementById("category").value=b.dataset.category;}));
document.getElementById("reportForm").addEventListener("submit",e=>{
 e.preventDefault();
 const report={id:id(),title:document.getElementById("title").value.trim(),category:document.getElementById("category").value,location:document.getElementById("location").value.trim(),description:document.getElementById("description").value.trim(),status:"Pending",created:Date.now()};
 if(!report.title||!report.category||!report.location||!report.description)return;
 reports.push(report);save();e.target.reset();photoData="";document.getElementById("photoPreview").classList.add("hidden");
 document.getElementById("formMessage").textContent="Your report "+report.id+" has been submitted successfully!";
 toast("Issue reported successfully!");go("myreports");
});
document.getElementById("photo").addEventListener("change",e=>{
 const file=e.target.files[0],box=document.getElementById("photoPreview");
 if(!file){box.classList.add("hidden");return}
 if(file.size>2*1024*1024){toast("Please choose an image under 2 MB.");e.target.value="";return}
 const reader=new FileReader();reader.onload=()=>{box.innerHTML=`<img src="${reader.result}" alt="Selected issue photo">`;box.classList.remove("hidden")};reader.readAsDataURL(file);
});
document.getElementById("searchReports").addEventListener("input",filterReports);
document.getElementById("statusFilter").addEventListener("change",filterReports);
document.getElementById("allReports").addEventListener("change",e=>{
 if(e.target.matches("select[data-id]")){const r=reports.find(x=>x.id===e.target.dataset.id);if(r){r.status=e.target.value;save();toast("Report status updated.");}}
});
let toastTimer;function toast(msg){const el=document.getElementById("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
document.getElementById("today").textContent=new Date().toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"});
render();
